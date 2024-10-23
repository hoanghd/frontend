import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getSession } from '@/faco/session'

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|img|css|login|favicon.ico).*)'
    ]
}

interface SessionData {
    username: string
    isLoggedIn: boolean
}

export async function middleware(request: NextRequest) {
    const session = await getSession<SessionData>()

    // if( !session.isLoggedIn ){
    //     return NextResponse.redirect(new URL('/login', request.url), 302)
    // }

    await session.save()
    return NextResponse.next()
}