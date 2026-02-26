/**
 * PKCE helpers for Shopify Customer Accounts OAuth 2.0
 */

export function generateRandomString(length = 64): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => chars[byte % chars.length]).join('');
}

export async function generateCodeChallenge(verifier: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return btoa(Array.from(new Uint8Array(digest), (b) => String.fromCharCode(b)).join(''))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export function decodeJwtPayload(token: string): Record<string, unknown> {
  const parts = token.split('.');
  if (parts.length !== 3) throw new Error('Invalid JWT');
  const payload = parts[1].replace(/-/g, '+').replace(/_/g, '/');
  const padded = payload + '='.repeat((4 - (payload.length % 4)) % 4);
  return JSON.parse(atob(padded));
}

/**
 * Extracts the numeric Shopify customer ID from the JWT `sub` claim.
 * Shopify Customer Accounts tokens use `sub: "gid://shopify/Customer/12345"`.
 */
export function getCustomerIdFromToken(token: string): number | null {
  try {
    const payload = decodeJwtPayload(token);
    const sub = payload.sub;
    if (sub == null) return null;
    // sub can be a plain number (e.g. 9863740981591)
    if (typeof sub === 'number') return sub;
    // Or a GID string: "gid://shopify/Customer/12345"
    const match = String(sub).match(/(?:Customer\/)?(\d+)$/);
    return match ? parseInt(match[1], 10) : null;
  } catch {
    return null;
  }
}
