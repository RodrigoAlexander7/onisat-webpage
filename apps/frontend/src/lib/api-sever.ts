import { cookies } from 'next/headers';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';

interface FetchOptions extends RequestInit {
  token?: string; // Token personalizado (opcional)
}

export async function fetchAPI<T = any>(
  endpoint: string,
  options?: FetchOptions
): Promise<T> {
  const { token, ...fetchOptions } = options || {};
  
  // Si se proporciona token, úsalo; si no, intenta leer de cookies
  const authToken = token || (await cookies()).get('access_token')?.value;

  const res = await fetch(`${BACKEND_URL}${endpoint}`, {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
      ...fetchOptions?.headers,
    },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`API Error (${res.status}): ${error}`);
  }

  return res.json();
}