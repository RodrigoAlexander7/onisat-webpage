import { cookies } from 'next/headers';

/**
 * Sets the authentication cookie with secure defaults
 * @param token - The JWT token to store in the cookie
 */
export async function setAuthCookie(token: string): Promise<void> {
  const cookiesStore = await cookies();
  cookiesStore.set({
    name: 'access_token',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  });
}

/**
 * Removes the authentication cookie
 */
export async function clearAuthCookie(): Promise<void> {
  const cookiesStore = await cookies();
  cookiesStore.delete('access_token');
}

/**
 * Gets the authentication token from cookies
 * @returns The token value or undefined if not found
 */
export async function getAuthToken(): Promise<string | undefined> {
  const cookiesStore = await cookies();
  return cookiesStore.get('access_token')?.value;
}
