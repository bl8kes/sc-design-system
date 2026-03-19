import { Box, Typography } from '@mui/material'
import { radius, stroke } from '../theme'

export default function ShapeSection() {
  return (
    <Box>
      <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '10px', overflow: 'hidden', mb: 3 }}>
        <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
            Border Radius — shape collection
          </Typography>
        </Box>
        <Box sx={{ p: 3, display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'flex-end' }}>
          {Object.entries(radius).map(([name, value]) => {
            const size = name === 'full' ? 64 : Math.max(56, value * 2.5 + 32)
            const h = name === 'full' ? 32 : size
            return (
              <Box key={name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{
                  width: name === 'full' ? 80 : size,
                  height: h,
                  bgcolor: 'rgba(255,85,0,0.08)',
                  border: '1.5px solid #FF5500',
                  borderRadius: `${value}px`,
                }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontSize: 10, fontFamily: 'monospace', color: '#FF5500', display: 'block' }}>
                    {name}
                  </Typography>
                  <Typography sx={{ fontSize: 9, fontFamily: 'monospace', color: 'text.secondary', display: 'block' }}>
                    {value === 9999 ? '9999px' : `${value}px`}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>

      <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '10px', overflow: 'hidden' }}>
        <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
            Stroke — Size collection
          </Typography>
        </Box>
        <Box sx={{ p: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ fontSize: 10, fontFamily: 'monospace', color: 'text.secondary', width: 80 }}>
              Border: {stroke.border}px
            </Typography>
            <Box sx={{ flex: 1, height: stroke.border, bgcolor: 'text.primary' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
