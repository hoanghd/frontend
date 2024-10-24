'use client'

import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import 'dayjs/locale/ja'

export default function ClientLocalizationProvider({children}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
            {children}
        </LocalizationProvider>
    )
}