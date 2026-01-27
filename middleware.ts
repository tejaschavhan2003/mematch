// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userId = request.cookies.get('user_id')?.value || 'guest';
  const routesToRewrite = ['/home', '/milestones'];

  if (routesToRewrite.includes(pathname)) {
    const targetPath = pathname === '/home' ? `/home/${userId}` : `/milestones/${userId}`;
    return NextResponse.rewrite(new URL(targetPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*', '/milestones/:path*'],
};