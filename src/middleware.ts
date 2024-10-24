import type { NextRequest } from 'next/server'
import { getSession } from '@/faco/session'
import { NextResponse } from 'next/server'

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|img|css|login|favicon.ico).*)'
    ]
}

export async function middleware(request: NextRequest) {
    const response = NextResponse.next()
    const session = await getSession(request, response)

    if( !session.isLoggedIn ){
        return NextResponse.redirect(new URL('/login', request.url), 302)
    }

    await session.save()
    return response
}