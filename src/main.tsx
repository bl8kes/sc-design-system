import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { buildTheme } from './theme'
import App from './App'

function Root() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const theme = buildTheme(mode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} onToggleMode={() => setMode(m => m === 'light' ? 'dark' : 'light')} />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
