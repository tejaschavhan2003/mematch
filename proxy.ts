import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 1. Define which routes should trigger your custom proxy logic
const isProxyRoute = createRouteMatcher(['/home(.*)', '/milestones(.*)']);

export default clerkMiddleware((auth, request) => {
  const { pathname } = request.nextUrl;

  // 2. Check if the current request matches your proxy paths
  if (isProxyRoute(request)) {
    const userId = request.cookies.get('user_id')?.value || 'guest';
    
    // Determine the rewrite destination
    // Note: startsWith is safer here to catch nested paths if needed
    const base = pathname.startsWith('/home') ? '/home' : '/milestones';
    const targetPath = `${base}/${userId}`;

    console.log(`Rewriting ${pathname} to ${targetPath}`);
    
    return NextResponse.rewrite(new URL(targetPath, request.url));
  }

  // 3. If not a proxy route, let Clerk continue normally
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Combined matchers: Clerk's default exclusion list + your specific routes
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    // Explicitly include your proxy routes just in case they'd be filtered out
    '/home/:path*', 
    '/milestones/:path*',
  ],
};