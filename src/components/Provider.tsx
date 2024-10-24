'use client'

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme'
import 'dayjs/locale/ja'

export default function Provider({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <AppRouterCacheProvider options={{ key: 'css', enableCssLayer: true }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </LocalizationProvider>
        </AppRouterCacheProvider>
    )
}