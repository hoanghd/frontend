import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import theme from '@/theme'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "Symphony",
  description: "Symphony"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
          <body className={roboto.variable}>
              <AppRouterCacheProvider options={{ key: 'css', enableCssLayer: true }}>
                  <ThemeProvider theme={theme}>
                      {children}
                  </ThemeProvider>
              </AppRouterCacheProvider>
          </body>
      </html>
  )
}
