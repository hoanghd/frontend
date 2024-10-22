'use client'

import { fetchAuthSession } from '@aws-amplify/auth'
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
    const printAccessTokenAndIdToken = async () => {
        try {
            const session = await fetchAuthSession();
            console.log('Access Token:', session.tokens.accessToken.toString());
            console.log('ID Token:', session.tokens.idToken.toString());
        }
        catch (e) { console.log(e); }
    }

  return (
      <Authenticator hideSignUp>
        {({ signOut, user }) => (
            <main>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button><br/>
                <button onClick={printAccessTokenAndIdToken}>Print Tokens</button>
            </main>
        )}
      </Authenticator>
  )
}
