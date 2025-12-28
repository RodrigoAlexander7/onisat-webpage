import { NextResponse, NextRequest } from 'next/server';
import { routesConfig } from '@/config/protectedRoutes';
import { composedMiddleware } from '@/middleware/main';

export function middleware(req: NextRequest) {
  const result = composedMiddleware(req);
  return result ?? NextResponse.next();
}

// add login to check if the user is authenticated
export const config = {
  matcher: routesConfig.matcher,
  //matcher: ['/dashboard/:path*', '/profile/:path*', '/login', '/admin/:path*'],
};
