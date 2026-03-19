import {
  Box, Typography, Alert, AlertTitle, Tooltip, Button,
  LinearProgress, CircularProgress, Skeleton, Stack, Snackbar,
} from '@mui/material'
import { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

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

export default function FeedbackSection() {
  const [snackOpen, setSnackOpen] = useState(false)

  return (
    <Box>
      <Panel title="Alerts">
        <Stack spacing={1.5}>
          <Alert severity="success">
            <AlertTitle>Track uploaded</AlertTitle>
            Your track is now live and available to listeners.
          </Alert>
          <Alert severity="error">
            <AlertTitle>Upload failed</AlertTitle>
            File exceeds the 2GB limit. Please compress and try again.
          </Alert>
          <Alert severity="warning">
            Track title may infringe on existing content.
          </Alert>
          <Alert severity="info">
            Distribution to Spotify takes 2–5 business days.
          </Alert>
        </Stack>
      </Panel>

      <Panel title="Tooltips">
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Tooltip title="Play track" placement="top">
            <Button variant="contained" size="small">Hover me (top)</Button>
          </Tooltip>
          <Tooltip title="Add to queue" placement="bottom">
            <Button variant="outlined" size="small">Hover me (bottom)</Button>
          </Tooltip>
          <Tooltip title="Share to social" placement="right">
            <Button variant={'brand' as any} size="small">Hover me (right)</Button>
          </Tooltip>
        </Stack>
      </Panel>

      <Panel title="Progress">
        <Stack spacing={3}>
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              LinearProgress — determinate
            </Typography>
            <LinearProgress variant="determinate" value={68} />
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              LinearProgress — indeterminate
            </Typography>
            <LinearProgress />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                Circular
              </Typography>
              <CircularProgress size={32} />
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                Circular — determinate
              </Typography>
              <CircularProgress variant="determinate" value={75} size={32} />
            </Box>
          </Box>
        </Stack>
      </Panel>

      <Panel title="Skeleton">
        <Stack spacing={1.5} sx={{ maxWidth: 320 }}>
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
            <Skeleton variant="circular" width={40} height={40} />
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '0.75rem', width: '60%' }} />
            </Box>
          </Box>
          <Skeleton variant="rectangular" height={120} sx={{ borderRadius: '8px' }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="80%" />
        </Stack>
      </Panel>

      <Panel title="Snackbar">
        <Stack direction="row" spacing={1.5}>
          <Button
            variant={'brand' as any}
            size="small"
            onClick={() => setSnackOpen(true)}
          >
            Show Snackbar
          </Button>
        </Stack>
        <Snackbar
          open={snackOpen}
          autoHideDuration={3000}
          onClose={() => setSnackOpen(false)}
          message="Track added to queue"
          action={
            <Button size="small" sx={{ color: '#FF5500' }} onClick={() => setSnackOpen(false)}>
              Undo
            </Button>
          }
        />
      </Panel>
    </Box>
  )
}
