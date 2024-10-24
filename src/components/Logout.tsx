import { getSession } from "@/faco/session"
import { redirect } from "next/navigation"

export default async function Logout() {
    const session = await getSession()

    return <form action={async () => {
        "use server"
        const session = await getSession()
        session.destroy()
        redirect('/login')
    }}>
        {session.isLoggedIn && (
            <button type="submit" className="btn btn-primary">Logout</button>
        )}
    </form>
}
