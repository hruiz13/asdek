import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'
import { Provider } from 'react-redux'
import { store } from './redux/store'

export const muiCache = createCache({
  key: 'mui',
  prepend: true
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
)
