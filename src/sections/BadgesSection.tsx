import { Box, Typography, Chip, Badge, Stack, Avatar } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import FavoriteIcon from '@mui/icons-material/Favorite'

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

export default function BadgesSection() {
  return (
    <Box>
      <Panel title="Chips — variants">
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label="Default" />
          <Chip label="Outlined" variant="outlined" />
          <Chip label="Clickable" onClick={() => {}} />
          <Chip label="Deletable" onDelete={() => {}} />
          <Chip label="Small" size="small" />
        </Stack>
      </Panel>

      <Panel title="Chips — semantic use cases">
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {[
            { label: 'Live',     color: 'success' },
            { label: 'Pro',      color: 'warning' },
            { label: 'Draft',    color: 'default' },
            { label: 'Pending',  color: 'warning' },
            { label: 'Removed',  color: 'error'   },
            { label: 'New',      color: 'info'     },
            { label: 'Beta',     color: 'default'  },
            { label: 'Featured', color: 'primary'  },
          ].map(({ label, color }) => (
            <Chip
              key={label}
              label={label}
              color={color as any}
              size="small"
              variant="outlined"
            />
          ))}
        </Stack>
      </Panel>

      <Panel title="MUI Badge — dot & count">
        <Stack direction="row" spacing={4} alignItems="center">
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon sx={{ color: 'text.secondary' }} />
          </Badge>
          <Badge badgeContent={99} color="error">
            <NotificationsIcon sx={{ color: 'text.secondary' }} />
          </Badge>
          <Badge variant="dot" color="success">
            <FavoriteIcon sx={{ color: 'text.secondary' }} />
          </Badge>
          <Badge badgeContent="NEW" color="warning">
            <Avatar sx={{ width: 32, height: 32, fontSize: 13 }}>SC</Avatar>
          </Badge>
        </Stack>
      </Panel>
    </Box>
  )
}
