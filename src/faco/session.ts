'use server'

export type Session<T> = T & {
    readonly save: () => Promise<void>;
    readonly destroy: () => void;
}

export async function getSession<T extends object>(): Promise<Session<T>>{
    const session = ({} as T)

    Object.defineProperties(session, {
        save: {
            value: async () => {

            }
        },

        destroy: {
            value: () => {

            }
        }
    })

    return session as Session<T>
}