// Docs: https://nextjs.org/docs/advanced-features/middleware
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// Cookies methods
import { parseCookies, destroyCookie } from 'nookies'; // From nookies lib - https://github.com/maticzav/nookies
// JWT verification function
import { verify } from 'jsonwebtoken';

export function middleware(request: NextRequest) {

    // Check if access token exists in headers as Bearer token
    const bearerToken = request.headers.get('authentication')?.split(" ")[1];

    if (!bearerToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        verify(bearerToken, process.env.SECRET_JWT);
    } catch (error) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();

}

export const config = {
    matcher: ['/dashboard', '/users', '/myprofile', '/api/users'],
}



