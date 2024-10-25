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
        MuiDayCalendar: {
            styleOverrides: {
                slideTransition: {
                    minHeight: '198px'
                }
            }
        },
        MuiDateCalendar: {
            styleOverrides: {
                root: {
                    width: 'auto',
                    height: 'auto'
                }
            }
        },
        MuiPickersCalendarHeader: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                    backgroundColor: '#008EC1',
                    marginTop: '1px'
                },
                switchViewButton: {
                    color: '#ffffff'
                }
            }
        }
    }
})
