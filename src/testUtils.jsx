import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LocalizationProvider } from '@mui/lab'
import { createTheme, ThemeProvider } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { createMemoryHistory } from 'history'
import { SnackbarProvider } from 'notistack'
import { Suspense } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { SWRConfig } from 'swr'
import { green, purple } from '@mui/material/colors'
globalThis.IS_REACT_ACT_ENVIRONMENT = true
export const cache = new Map()

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    }
  }
})

const ThemeModeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const Providers = ({ children, history, route, swrCache }) => {
  let Wrapper = (
    <Suspense fallback={null}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SWRConfig
          value={{
            dedupingInterval: 0,
            errorRetryCount: 0,
            fetcher: undefined,
            revalidateOnFocus: false,
            provider: () => swrCache
          }}
        >
          <ThemeModeProvider>
            <SnackbarProvider autoHideDuration={20} maxSnack={1}>
              {children}
            </SnackbarProvider>
          </ThemeModeProvider>
        </SWRConfig>
      </LocalizationProvider>
    </Suspense>
  )

  if (route) {
    Wrapper = (
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route element={Wrapper} path={route} />
        </Routes>
      </Router>
    )
  }

  return Wrapper
}

const renderWithProviders = (
  ui,
  options = {}
) => {
  const { initialEntries = [], route, ...rest } = options
  const history = createMemoryHistory({ initialEntries })
  const swrCache = new Map(cache)

  const rtl = render(ui, {
    wrapper: ({ children }) => (
      <Providers history={history} route={route} swrCache={swrCache}>
        {children}
      </Providers>
    ),
    ...rest
  })

  return {
    ...rtl,
    rerender: (ui, rerenderOptions) =>
      renderWithProviders(ui, {
        container: rtl.container,
        ...options,
        ...rerenderOptions
      }),
    history,
    swrCache
  }
}

export { screen } from '@testing-library/react'

export { renderWithProviders as render, userEvent as user }
