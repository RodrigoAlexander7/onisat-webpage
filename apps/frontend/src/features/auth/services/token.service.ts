import { fetchAPI } from '@/lib/api-sever';

/**
 * Validates a JWT token by calling the backend /users/me endpoint
 * @param token - The JWT token to validate
 * @returns true if token is valid, false otherwise
 */
export async function validateToken(token: string): Promise<boolean> {
  try {
    await fetchAPI('/users/me', { token });
    return true;
  } catch (error) {
    console.error('Token validation failed:', error);
    return false;
  }
}
