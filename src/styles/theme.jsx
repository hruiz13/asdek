import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8cad6b',
      light: '#ADC596',
      dark: '#709150'
    },
    secondary: {
      main: '#4A6D7C',
      light: '#6691A3',
      dark: '#3D5A66'
    },
    success: {
      main: '#62929E',
      light: '#81A8B1',
      dark: '#4E757E'
    },
    info: {
      main: '#475657',
      light: '#657A7B',
      dark: '#2E3738'
    },
    background: {
      default: '#C6C5B9',
      paper: '#D1D0C7'
    },
    warning: {
      main: '#A31621',
      light: '#D71D2D',
      dark: '#6C0F16'
    }
  },
  typography: {
    title: {
      borderBottom: 'solid 4px #D71D2D',
      width: 'fit-content'
    }
  }

})
