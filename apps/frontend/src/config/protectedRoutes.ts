export const protectedRoutes = ['/dashboard', '/settings', '/admin'];
export const authRoutes = ['/login', '/register'];
export const publicRoutes = ['/'];

const matcher = [...protectedRoutes.map((r) => `${r}/:path*`), ...authRoutes];

export const routesConfig = {
  matcher
};
