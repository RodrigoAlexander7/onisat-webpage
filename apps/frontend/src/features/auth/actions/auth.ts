'use server';

import { redirect } from 'next/navigation';
import { fetchAPI } from '@/lib/api-sever';
import { validateToken } from '@/features/auth/services/token.service';
import { setAuthCookie, clearAuthCookie, getAuthToken } from '@/features/auth/services/cookie.service';

/**
 * Get the current user from the backend using the stored auth token.
 */
export async function getCurrentUser() {
  const token = await getAuthToken();
  if (!token) {
    return null;
  }
  try {
    const user = await fetchAPI('/users/me');
    return user;
  } catch (error) {
    console.error('Failed to get current user:', error);
    return null;
  }
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

interface AuthResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Server action to login with email and password
 * Sets httpOnly cookie on success and redirects to dashboard
 */
export async function loginWithCredentials(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  try {
    // Call backend login endpoint
    const { accessToken } = await fetchAPI<{ accessToken: string }>(
      '/auth/login',
      {
        method: 'POST',
        body: JSON.stringify(credentials),
      }
    );

    // Validate token with backend
    const isValid = await validateToken(accessToken);
    if (!isValid) {
      return {
        success: false,
        error: 'Token validation failed',
      };
    }

    // Set httpOnly cookie
    await setAuthCookie(accessToken);

    // Redirect to create news on successful login
    redirect('/admin/news');
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred',
    };
  }
}

/**
 * Server action to register a new user
 * Sets httpOnly cookie on success and redirects to dashboard
 */
export async function registerWithCredentials(
  data: RegisterData
): Promise<AuthResponse> {
  try {
    // Call backend register endpoint
    const { accessToken } = await fetchAPI<{ accessToken: string }>(
      '/auth/register',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );

    // Validate token with backend
    const isValid = await validateToken(accessToken);
    if (!isValid) {
      return {
        success: false,
        error: 'Token validation failed',
      };
    }

    // Set httpOnly cookie
    await setAuthCookie(accessToken);

    // Redirect to dashboard on successful registration
    redirect('/dashboard');
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred',
    };
  }
}

export async function logout() {
  await clearAuthCookie();
  redirect('/');
}
