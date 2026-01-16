import { NextRequest, NextResponse } from 'next/server';
import { validateToken } from '@/features/auth/services/token.service';
import { setAuthCookie } from '@/features/auth/services/cookie.service';

// URL del frontend (para redirecciones desde el navegador)
const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:4000';

// Google returns to here with a token
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json({ message: 'Token is missing' }, { status: 400 });
  }

  // Validate token with backend
  const isValid = await validateToken(token);
  if (!isValid) {
    return NextResponse.redirect(new URL('/login?error=invalid_token', FRONTEND_URL));
  }

  // Token is valid, set cookie
  try {
    await setAuthCookie(token);
    return NextResponse.redirect(new URL('/admin/news', FRONTEND_URL));
  } catch (error) {
    console.error('Error setting cookie:', error);
    return NextResponse.json(
      { message: 'Error setting cookie' },
      { status: 500 },
    );
  }
}
