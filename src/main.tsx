import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, CssBaseline, Box, TextField, Button, Typography } from '@mui/material'
import { buildTheme } from './theme'
import App from './App'

const PASSWORD = 'SoundStyle'
const STORAGE_KEY = 'sc-ds-auth'

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const attempt = () => {
    if (value === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, '1')
      onUnlock()
    } else {
      setError(true)
      setValue('')
    }
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: '#0f0f0f',
      flexDirection: 'column',
      gap: 3,
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
        <Box sx={{
          width: 36, height: 36, bgcolor: '#FF5500',
          borderRadius: '8px', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <Typography sx={{ color: '#fff', fontSize: 18 }}>◉</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: 15, lineHeight: 1.2 }}>SoundCloud</Typography>
          <Typography sx={{ color: '#666', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Design System</Typography>
        </Box>
      </Box>

      <Box sx={{
        bgcolor: '#1a1a1a',
        border: '1px solid #2a2a2a',
        borderRadius: '12px',
        p: 4,
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}>
        <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>Enter password</Typography>
        <TextField
          type="password"
          placeholder="Password"
          value={value}
          error={error}
          helperText={error ? 'Incorrect password' : ''}
          onChange={e => { setValue(e.target.value); setError(false) }}
          onKeyDown={e => e.key === 'Enter' && attempt()}
          autoFocus
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              bgcolor: '#111',
              color: '#fff',
              '& fieldset': { borderColor: '#333' },
              '&:hover fieldset': { borderColor: '#555' },
              '&.Mui-focused fieldset': { borderColor: '#FF5500' },
            },
            '& input::placeholder': { color: '#555' },
          }}
        />
        <Button
          fullWidth
          onClick={attempt}
          sx={{
            bgcolor: '#FF5500',
            color: '#fff',
            fontWeight: 600,
            borderRadius: '999px',
            height: 40,
            '&:hover': { bgcolor: '#E64800' },
          }}
        >
          Unlock
        </Button>
      </Box>
    </Box>
  )
}

function Root() {
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem(STORAGE_KEY) === '1'
  )
  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const theme = buildTheme(mode)

  if (!unlocked) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      </ThemeProvider>
    )
  }

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
