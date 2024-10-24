'use client'

import { createTheme } from '@mui/material/styles'
import type {} from '@mui/x-date-pickers-pro/themeAugmentation'

export default createTheme({
    cssVariables: true,
    components: {
        MuiPickersArrowSwitcher: {
            styleOverrides: {
                button: {
                    color: '#ffffff'
                }
            }
        },
        MuiPickersCalendarHeader: {
            styleOverrides: {
                root: {
                    color: '#bbdefb',
                    backgroundColor: '#0d47a1'
                },
                switchViewButton: {
                    color: '#ffffff'
                }
            }
        }
    }
})
