import { Box, Typography, Card, CardContent, CardActions, Button, Chip, Stack, Avatar } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import RepeatIcon from '@mui/icons-material/Repeat'

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

export default function CardsSection() {
  return (
    <Box>
      <Panel title="Card variants">
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 2 }}>
          {/* Default */}
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 10, fontFamily: 'monospace', color: 'text.secondary', mb: 0.5 }}>default</Typography>
              <Typography variant="h5">2.4M</Typography>
              <Typography variant="caption" color="text.secondary">Total plays this month</Typography>
            </CardContent>
          </Card>

          {/* Elevated */}
          <Card variant={'elevated' as any}>
            <CardContent>
              <Typography sx={{ fontSize: 10, fontFamily: 'monospace', color: 'text.secondary', mb: 0.5 }}>elevated</Typography>
              <Typography variant="h5" sx={{ color: '#FF5500' }}>+12.8K</Typography>
              <Typography variant="caption" color="text.secondary">New followers this month</Typography>
            </CardContent>
          </Card>

          {/* Outlined */}
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 10, fontFamily: 'monospace', color: 'text.secondary', mb: 0.5 }}>outlined</Typography>
              <Typography variant="h5">847</Typography>
              <Typography variant="caption" color="text.secondary">Reposts last 30 days</Typography>
            </CardContent>
          </Card>
        </Box>
      </Panel>

      <Panel title="Track card">
        <Box sx={{ maxWidth: 320 }}>
          <Card>
            {/* Artwork placeholder */}
            <Box sx={{
              height: 160,
              bgcolor: 'rgba(255,85,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <Box sx={{
                width: 48, height: 48,
                bgcolor: '#FF5500',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.06)', transition: 'transform 120ms' },
              }}>
                <PlayArrowIcon sx={{ color: '#fff', fontSize: 28 }} />
              </Box>
              <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                <Chip label="NEW" size="small" color="primary" variant="outlined" />
              </Box>
            </Box>

            <CardContent sx={{ pb: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Avatar sx={{ width: 24, height: 24, fontSize: 10 }}>JD</Avatar>
                <Typography variant="caption" color="text.secondary">John Doe</Typography>
              </Box>
              <Typography variant="h6" sx={{ display: 'block', mb: 0.5 }}>
                Midnight City (Remix)
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Electronic · 4:32
              </Typography>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 1.5 }}>
              <Stack direction="row" spacing={0.5}>
                <Button size="small" variant="text" startIcon={<FavoriteBorderIcon sx={{ fontSize: 16 }} />}>
                  2.1K
                </Button>
                <Button size="small" variant="text" startIcon={<RepeatIcon sx={{ fontSize: 16 }} />}>
                  847
                </Button>
                <Button size="small" variant="text">
                  <MoreHorizIcon sx={{ fontSize: 18 }} />
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Box>
      </Panel>
    </Box>
  )
}
