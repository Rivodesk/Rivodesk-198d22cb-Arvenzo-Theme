export interface CustomerAccountProfile {
  firstName: string | null;
  lastName: string | null;
  emailAddress: { emailAddress: string } | null;
  phoneNumber: { phoneNumber: string } | null;
  defaultAddress: {
    firstName: string | null;
    lastName: string | null;
    address1: string | null;
    address2: string | null;
    city: string | null;
    zip: string | null;
    countryCode: string | null;
  } | null;
}

const QUERY = `
  query CustomerProfile {
    customer {
      firstName
      lastName
      emailAddress { emailAddress }
      phoneNumber { phoneNumber }
      defaultAddress {
        firstName
        lastName
        address1
        address2
        city
        zip
        countryCode
      }
    }
  }
`;

export async function getCustomerAccountProfile(
  accessToken: string,
): Promise<CustomerAccountProfile | null> {
  const endpoint = `https://${process.env.SHOPIFY_STORE_DOMAIN}/account/customer/api/2024-07/graphql.json`;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: QUERY }),
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('[CustomerAccountAPI] HTTP error:', res.status, await res.text());
      return null;
    }

    const json = await res.json();

    if (json.errors) {
      console.error('[CustomerAccountAPI] GraphQL errors:', JSON.stringify(json.errors));
      return null;
    }

    return json?.data?.customer ?? null;
  } catch (e) {
    console.error('[CustomerAccountAPI] fetch failed:', e);
    return null;
  }
}
