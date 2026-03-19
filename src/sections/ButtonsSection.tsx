import { Box, Typography, Button, Stack } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '10px', overflow: 'hidden', mb: 3 }}>
      <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography sx={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ p: 2.5 }}>{children}</Box>
    </Box>
  )
}

export default function ButtonsSection() {
  return (
    <Box>
      <Panel title="Variants">
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button variant="contained">Primary</Button>
          <Button variant="outlined">Tertiary</Button>
          <Button variant="text">Text</Button>
          <Button variant={'brand' as any}>Brand</Button>
          <Button variant={'danger' as any}>Danger</Button>
        </Stack>
      </Panel>

      <Panel title="Sizes">
        <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" useFlexGap>
          <Button variant="contained" size="small">Small 32px</Button>
          <Button variant="contained" size="medium">Medium 40px</Button>
          <Button variant="contained" size="large">Large 48px</Button>
        </Stack>
      </Panel>

      <Panel title="With icon">
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button variant={'brand' as any} startIcon={<PlayArrowIcon />}>Play</Button>
          <Button variant="contained" startIcon={<PlayArrowIcon />}>Play</Button>
          <Button variant="outlined" startIcon={<PlayArrowIcon />}>Play</Button>
        </Stack>
      </Panel>

      <Panel title="States">
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button variant="contained">Default</Button>
          <Button variant="contained" disabled>Disabled</Button>
          <Button variant={'brand' as any}>Default</Button>
          <Button variant={'brand' as any} disabled>Disabled</Button>
          <Button variant={'danger' as any}>Default</Button>
          <Button variant={'danger' as any} disabled>Disabled</Button>
        </Stack>
      </Panel>

      <Panel title="Usage notes">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {[
            { variant: 'contained', desc: 'Primary action — black/white, maps to primary.main' },
            { variant: 'brand',     desc: 'Brand CTA — SoundCloud orange #FF5500, use sparingly' },
            { variant: 'outlined',  desc: 'Tertiary — ghost with border, secondary actions' },
            { variant: 'text',      desc: 'Minimal — no border, inline or low-emphasis actions' },
            { variant: 'danger',    desc: 'Destructive actions — maps to error.main' },
          ].map(({ variant, desc }) => (
            <Box key={variant} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 100, flexShrink: 0 }}>
                <Typography sx={{ fontSize: 10, fontFamily: 'monospace', color: '#FF5500' }}>
                  {variant}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Panel>
    </Box>
  )
}
