'use client'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from "aws-amplify"

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolClientId: '2np4u2e23ihfdf3bl1b554ukhl',
            userPoolId: 'ap-northeast-1_KyLp1nzhQ'
        }
    }
})

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
