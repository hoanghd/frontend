import { SessionOptions, getIronSession } from "iron-session"
import type { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export interface SessionData {
    id: number
    username: string
    token: string
    isLoggedIn: boolean
}

export const sessionOptions: SessionOptions = {
    password: (process.env.SESSION_PW || ''),
    cookieName: (process.env.COOKIE_NAME || ''),
    cookieOptions: {
        secure: (process.env.NODE_ENV === "production"),
        maxAge: 20 * 60, // 20 minutes
    }
}

export async function getSession(request?: NextRequest, response?:  NextResponse) {
    if( request && response ){
        return await getIronSession<SessionData>(request, response, sessionOptions)
    }
    return await getIronSession<SessionData>(cookies(), sessionOptions)
}