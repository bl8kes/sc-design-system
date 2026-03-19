import { Box, Typography, Tooltip } from '@mui/material'
import { baseColors } from '../theme'

type ColorScale = Record<string | number, string>

function luminance(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function Swatch({ name, hex }: { name: string | number; hex: string }) {
  const dark = luminance(hex) < 0.35

  const copy = () => {
    navigator.clipboard.writeText(hex).catch(() => {})
  }

  return (
    <Tooltip title="Click to copy" placement="top">
      <Box
        onClick={copy}
        sx={{
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid',
          borderColor: 'divider',
          cursor: 'pointer',
          transition: 'transform 120ms ease',
          '&:hover': { transform: 'scale(1.04)' },
        }}
      >
        <Box sx={{ height: 52, bgcolor: hex }} />
        <Box sx={{ p: '8px 10px', bgcolor: 'background.paper' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 600, color: 'text.primary', display: 'block' }}>
            {name}
          </Typography>
          <Typography sx={{ fontSize: 9, fontFamily: 'monospace', color: 'text.secondary', display: 'block', mt: 0.25 }}>
            {hex}
          </Typography>
        </Box>
      </Box>
    </Tooltip>
  )
}

function ColorPanel({ title, scale }: { title: string; scale: ColorScale }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{
          p: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
          gap: 1,
        }}>
          {Object.entries(scale).map(([stop, hex]) => (
            <Swatch key={stop} name={stop} hex={hex} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default function ColorsSection() {
  const { black, white, pro, artist, ...scales } = baseColors

  return (
    <Box>
      {/* Brand */}
      <ColorPanel title="Brand" scale={{
        'orange/500 — primary': '#FF5500',
        'pro — gold':           pro.main,
        'artist — violet':      artist.main,
        'black':                black[0],
        'white':                white[0],
      }} />

      {/* All base scales */}
      {Object.entries(scales).map(([name, scale]) => (
        <ColorPanel key={name} title={name} scale={scale as ColorScale} />
      ))}
    </Box>
  )
}
