import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import NextAuth from "next-auth";
import authConfig from "@/app/auth/auth.config";

const { auth } = NextAuth(authConfig);

const protectedRoutes = [
  "/api/user",
  "/user",
];

interface Session {
  user?: {
    id: string;
    // Add other user properties as needed
    name?: string;
    email?: string;
  };
  expires?: string | Date;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((path) => pathname.startsWith(path));

  if (isProtected) {
    const session = await auth();
     
    console.log("middleware session", session);
    
    if (!session?.user || isSessionExpired(session)) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", request.url);
      return NextResponse.redirect(loginUrl);
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('userId', session.user.id);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};

function isSessionExpired(session: Session): boolean {
  return !!session.expires && new Date(session.expires) < new Date();
}