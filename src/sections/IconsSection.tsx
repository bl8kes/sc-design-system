import { Box, Typography, Tooltip, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react'
import * as Icons from '@mui/icons-material'

// Curated set relevant to SoundCloud UI
const ICON_GROUPS = [
  {
    label: 'Playback',
    icons: ['PlayArrow', 'Pause', 'Stop', 'SkipNext', 'SkipPrevious', 'Replay', 'Shuffle', 'Repeat', 'RepeatOne', 'VolumeUp', 'VolumeOff', 'VolumeMute'],
  },
  {
    label: 'Social',
    icons: ['Favorite', 'FavoriteBorder', 'ThumbUp', 'ThumbUpOffAlt', 'Share', 'Repeat', 'Comment', 'ChatBubbleOutline', 'PersonAdd', 'PersonAddAlt'],
  },
  {
    label: 'Content',
    icons: ['LibraryMusic', 'QueueMusic', 'Audiotrack', 'Album', 'MusicNote', 'Mic', 'Headphones', 'Radio', 'Podcasts', 'GraphicEq'],
  },
  {
    label: 'Navigation',
    icons: ['Home', 'Search', 'Explore', 'Notifications', 'NotificationsOutlined', 'Settings', 'AccountCircle', 'Menu', 'MoreHoriz', 'MoreVert'],
  },
  {
    label: 'Actions',
    icons: ['Add', 'Edit', 'Delete', 'DeleteOutline', 'Upload', 'Download', 'CloudUpload', 'Link', 'ContentCopy', 'OpenInNew'],
  },
  {
    label: 'Status',
    icons: ['CheckCircle', 'CheckCircleOutline', 'Error', 'ErrorOutline', 'Warning', 'WarningAmber', 'Info', 'InfoOutlined', 'Lock', 'LockOpen'],
  },
]

type IconSize = 'small' | 'medium' | 'large'
const SIZE_MAP: Record<IconSize, number> = { small: 16, medium: 24, large: 32 }

export default function IconsSection() {
  const [size, setSize] = useState<IconSize>('medium')

  return (
    <Box>
      {/* Controls */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Typography variant="caption" color="text.secondary">Size:</Typography>
        <ToggleButtonGroup
          value={size}
          exclusive
          onChange={(_, v) => v && setSize(v)}
          size="small"
        >
          <ToggleButton value="small">16px</ToggleButton>
          <ToggleButton value="medium">24px</ToggleButton>
          <ToggleButton value="large">32px</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {ICON_GROUPS.map(group => (
        <Box key={group.label} sx={{
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '10px',
          overflow: 'hidden',
          mb: 2,
        }}>
          <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Typography sx={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
              {group.label}
            </Typography>
          </Box>
          <Box sx={{ p: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {group.icons.map(name => {
              const Icon = (Icons as any)[name]
              if (!Icon) return null
              return (
                <Tooltip key={name} title={name} placement="top">
                  <Box sx={{
                    width: 44, height: 44,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background 120ms ease',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                    onClick={() => navigator.clipboard.writeText(name).catch(() => {})}
                  >
                    <Icon sx={{ fontSize: SIZE_MAP[size], color: 'text.primary' }} />
                  </Box>
                </Tooltip>
              )
            })}
          </Box>
        </Box>
      ))}

      <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '10px', p: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Click any icon to copy its name. Full library at{' '}
          <a href="https://mui.com/material-ui/material-icons/" target="_blank" rel="noreferrer"
            style={{ color: '#FF5500' }}>
            mui.com/material-ui/material-icons
          </a>
          . Rounded style recommended with Söhne.
        </Typography>
      </Box>
    </Box>
  )
}
