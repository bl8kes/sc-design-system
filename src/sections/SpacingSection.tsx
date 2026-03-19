import { Box, Typography } from '@mui/material'
import { sizing, breakpoints } from '../theme'

export default function SpacingSection() {
  return (
    <Box>
      {/* Sizing grid */}
      <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '10px', overflow: 'hidden', mb: 3 }}>
        <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
            Sizing — 8px base grid
          </Typography>
        </Box>
        <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 1 }}>
          {Object.entries(sizing).map(([key, px]) => (
            <Box key={key} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ width: 140, fontSize: 10, fontFamily: 'monospace', color: 'text.secondary', flexShrink: 0 }}>
                sizing['{key}'] → {px}px
              </Typography>
              <Box sx={{
                height: 20,
                width: px,
                bgcolor: 'rgba(255,85,0,0.2)',
                borderRight: '2px solid #FF5500',
                borderRadius: '2px 0 0 2px',
                minWidth: 4,
              }} />
              <Typography sx={{ fontSize: 10, fontFamily: 'monospace', color: 'text.disabled' }}>
                {px}px
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* MUI spacing */}
      <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '10px', overflow: 'hidden', mb: 3 }}>
        <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
            MUI theme.spacing() — 1 unit = 8px
          </Typography>
        </Box>
        <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 1 }}>
          {[0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8].map(n => (
            <Box key={n} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ width: 140, fontSize: 10, fontFamily: 'monospace', color: 'text.secondary', flexShrink: 0 }}>
                theme.spacing({n}) → {n * 8}px
              </Typography>
              <Box sx={{
                height: 20,
                width: n * 8,
                bgcolor: 'rgba(255,85,0,0.15)',
                borderRight: '2px solid rgba(255,85,0,0.5)',
                borderRadius: '2px 0 0 2px',
                minWidth: 4,
              }} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Breakpoints */}
      <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '10px', overflow: 'hidden' }}>
        <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
            Breakpoints
          </Typography>
        </Box>
        <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {Object.entries(breakpoints).map(([name, { min, max }]) => (
            <Box key={name} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ width: 80, fontSize: 10, fontFamily: 'monospace', color: '#FF5500', textTransform: 'uppercase', flexShrink: 0 }}>
                {name}
              </Typography>
              <Typography sx={{ fontSize: 11, fontFamily: 'monospace', color: 'text.primary' }}>
                {min}px – {max}px
              </Typography>
              <Box sx={{
                flex: 1,
                height: 6,
                bgcolor: 'background.mid',
                borderRadius: 99,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <Box sx={{
                  position: 'absolute',
                  left: `${(min / 1440) * 100}%`,
                  width: `${((max - min) / 1440) * 100}%`,
                  height: '100%',
                  bgcolor: '#FF5500',
                  opacity: name === 'mobile' ? 0.4 : name === 'tablet' ? 0.7 : 1,
                  borderRadius: 99,
                }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
