import Provider from "@/components/Provider"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Symphony",
  description: "Symphony"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
          <body>
              <Provider>
                  {children}
              </Provider>
          </body>
      </html>
  )
}
