import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|img|css).*)'
    ]
}
export function middleware(request: NextRequest) {
    console.log(request.url)
    return NextResponse.next()
}