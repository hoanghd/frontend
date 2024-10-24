import ClientLocalizationProvider from "@/components/ClientLocalizationProvider"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import type { Metadata } from 'next'
import theme from '@/theme'

export const metadata: Metadata = {
  title: "Symphony",
  description: "Symphony"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
          <body>
              <AppRouterCacheProvider options={{ key: 'css', enableCssLayer: true }}>
                  <ThemeProvider theme={theme}>
                      <ClientLocalizationProvider>
                          {children}
                      </ClientLocalizationProvider>
                  </ThemeProvider>
              </AppRouterCacheProvider>
          </body>
      </html>
  )
}
