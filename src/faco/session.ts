'use server'

import { cookies } from 'next/headers'

export type Session<T> = T & {
    readonly save: (flag?: boolean) => Promise<void>
    readonly destroy: () => void
}

const { COOKIE_NAME } = process.env

export async function getSession<T extends object>(): Promise<Session<T>>{
    const cookieStore = await cookies()

    if( cookieStore.has(COOKIE_NAME) ){
        const id = cookieStore.get(COOKIE_NAME)?.value
        console.log(id)
    }

    const session = ({} as T)

    Object.defineProperties(session, {
        save: {
            value: async (flag?) => {}
        },

        destroy: {
            value: () => {}
        }
    })

    return session as Session<T>
}