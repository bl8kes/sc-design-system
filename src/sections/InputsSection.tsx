import { Box, Typography, TextField, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'

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

export default function InputsSection() {
  return (
    <Box>
      <Panel title="States">
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <TextField label="Default" placeholder="Enter track name…" />
          <TextField label="With value" defaultValue="Midnight City" />
          <TextField label="Error" defaultValue="bad@@input" error helperText="Enter a valid email address" />
          <TextField label="Success" defaultValue="valid@email.com" color="success" focused helperText="Looks good!" />
          <TextField label="Disabled" defaultValue="Read only value" disabled helperText="This field is disabled" />
          <TextField label="With helper" helperText="Track name must be unique" />
        </Stack>
      </Panel>

      <Panel title="With adornments">
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <TextField
            placeholder="Search tracks, artists…"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Panel>

      <Panel title="Multiline">
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <TextField
            label="Track description"
            multiline
            rows={3}
            placeholder="Describe your track…"
            helperText="0 / 500 characters"
          />
        </Stack>
      </Panel>
    </Box>
  )
}
