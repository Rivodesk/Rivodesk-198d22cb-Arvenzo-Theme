'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { getCustomerIdFromToken, decodeJwtPayload } from '@/lib/auth';
import { getCustomerById, getCustomerByEmail, updateCustomer, upsertDefaultAddress } from '@/lib/shopifyAdmin';

async function getCustomerIdFromCookie(): Promise<number> {
  const idToken = cookies().get('arvenzo_id_token')?.value;
  if (!idToken) throw new Error('Niet ingelogd');

  // Prefer direct ID from JWT sub claim
  const id = getCustomerIdFromToken(idToken);
  if (id) return id;

  // Fall back: look up by email
  const payload = decodeJwtPayload(idToken);
  const email = (payload.email as string) ?? '';
  const customer = await getCustomerByEmail(email);
  if (!customer) throw new Error('Klant niet gevonden');
  return customer.id;
}

async function getCustomerDefaultAddressId(customerId: number): Promise<number | undefined> {
  const customer = await getCustomerById(customerId);
  return customer?.default_address?.id;
}

export async function updatePersonalInfoAction(
  _prev: { error: string | null; success: boolean },
  formData: FormData,
): Promise<{ error: string | null; success: boolean }> {
  try {
    const customerId = await getCustomerIdFromCookie();

    await updateCustomer(customerId, {
      first_name: formData.get('first_name') as string,
      last_name: formData.get('last_name') as string,
      phone: (formData.get('phone') as string) || undefined,
    });

    revalidatePath('/account');
    return { error: null, success: true };
  } catch (e) {
    console.error(e);
    return { error: 'Opslaan mislukt. Probeer opnieuw.', success: false };
  }
}

export async function updateAddressAction(
  _prev: { error: string | null; success: boolean },
  formData: FormData,
): Promise<{ error: string | null; success: boolean }> {
  try {
    const customerId = await getCustomerIdFromCookie();
    const existingAddressId = await getCustomerDefaultAddressId(customerId);

    await upsertDefaultAddress(
      customerId,
      {
        first_name: formData.get('first_name') as string,
        last_name: formData.get('last_name') as string,
        address1: formData.get('address1') as string,
        address2: (formData.get('address2') as string) ?? '',
        city: formData.get('city') as string,
        zip: formData.get('zip') as string,
        country_code: formData.get('country_code') as string,
      },
      existingAddressId,
    );

    revalidatePath('/account');
    return { error: null, success: true };
  } catch (e) {
    console.error(e);
    return { error: 'Adres opslaan mislukt. Probeer opnieuw.', success: false };
  }
}
