import { redirect } from 'next/navigation'
import { getSession } from '@/faco/session'

export default async function Page() {
  return (
      <form action={async () => {
        "use server"

        const session = await getSession()

        session.id = 100
        session.username = 'hoanghd'
        session.token = '123456'
        session.isLoggedIn = true
        await session.save()

        redirect('/')
      }}>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
  )
}
