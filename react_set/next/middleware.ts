// Docs: https://nextjs.org/docs/advanced-features/middleware
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// Cookies methods
import { parseCookies, setCookie, destroyCookie } from 'nookies'; // From nookies lib - https://github.com/maticzav/nookies

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    /*
    const cookies = parseCookies();
    const cookie = cookies['nextauth'];

    console.log(cookie)

    if (!cookie) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    */

    return NextResponse.next();

}

export const config = {
    matcher: ['/dashboard', '/users', '/myprofile'],
}



