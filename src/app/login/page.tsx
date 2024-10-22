'use client'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from "aws-amplify"

import config from '@/amplifyconfiguration.json'

Amplify.configure(config)

export default function Page() {
  return (
      <Authenticator hideSignUp>
        {({ signOut, user }) => (
            <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
        )}
      </Authenticator>
  )
}
