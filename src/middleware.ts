import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/uye/dashboard(.*)',
  '/uye/admin(.*)',
  '/uye/firma-tanimla(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

// Yalnız üye ve giriş sayfaları. Kamuya açık sayfalara genişletilmemeli: Clerk geliştirme
// anahtarıyla Accept: text/html isteyen Googlebot'u çerezsiz el sıkışma döngüsüne sokar
// (accounts.dev'e 307) ve site dizine eklenemez.
export const config = {
  matcher: ['/uye/:path*', '/giris/:path*', '/kayit/:path*'],
};
