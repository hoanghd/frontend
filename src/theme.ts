'use client'

import { createTheme } from '@mui/material/styles'
import type {} from '@mui/x-date-pickers-pro/themeAugmentation'

export default createTheme({
    cssVariables: true,
    components: {
        MuiPickersCalendarHeader: {
            styleOverrides: {
                label: {
                    color: '#bbdefb',
                    borderRadius: '4px',
                    borderWidth: '0px',
                    borderColor: '#2196f3',
                    border: '0px solid',
                    backgroundColor: '#0d47a1',
                }
            }
        }
    }
})
