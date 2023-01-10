// Docs: https://nextjs.org/docs/advanced-features/middleware
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// JWT verification function
import { verify } from 'jsonwebtoken';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    // Check if access token exists
    // Check cookie or header?

    /*
    if (!authToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    const token = authToken.split(" ")[1];

    try {
        verify(token, process.env.SECRET_JWT);
    } catch (error) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
    */

}

export const config = {
    matcher: ['/dashboard', '/users', '/myprofile', '/api/users'],
}



