import { Box, Typography, Chip } from '@mui/material'
import { typeStyles, fontWeight, fontSize } from '../theme'

const STYLES = [
  { name: 'Display 0',  key: 'display0',  muiVariant: 'h1',       sample: 'Display' },
  { name: 'Display 3',  key: 'display3',  muiVariant: 'h2',       sample: 'Display' },
  { name: 'Display 4',  key: 'display4',  muiVariant: 'h3',       sample: 'Display heading' },
  { name: 'Heading 1',  key: 'heading1',  muiVariant: 'h4',       sample: 'Section heading' },
  { name: 'Heading 2',  key: 'heading2',  muiVariant: 'h5',       sample: 'Subsection heading' },
  { name: 'Heading 3',  key: 'heading3',  muiVariant: 'h6',       sample: 'Component heading' },
  { name: 'Heading 4',  key: 'heading4',  muiVariant: 'subtitle1',sample: 'Label heading' },
  { name: 'Heading 5',  key: 'heading5',  muiVariant: 'subtitle2',sample: 'Small heading' },
  { name: 'Heading 6',  key: 'heading6',  muiVariant: 'overline', sample: 'OVERLINE LABEL' },
  { name: 'Body Large', key: 'bodyLarge', muiVariant: 'body1',    sample: 'Body copy for primary reading.' },
  { name: 'Body',       key: 'body',      muiVariant: 'body2',    sample: 'Secondary body text and descriptions.' },
  { name: 'Caption',    key: 'caption',   muiVariant: 'caption',  sample: 'Captions, timestamps, metadata' },
  { name: 'Micro',      key: 'micro',     muiVariant: '—',        sample: 'Micro labels, badges, counts' },
] as const

const WEIGHT_NAMES: Record<number, string> = {
  400: 'Buch / Regular',
  600: 'Halbfett / SemiBold',
  800: 'Extrafett / ExtraBold',
}

export default function TypographySection() {
  return (
    <Box>
      {/* Type scale table */}
      <Box sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '10px',
        overflow: 'hidden',
        mb: 3,
      }}>
        <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
            Type Scale — Söhne
          </Typography>
        </Box>

        {STYLES.map(({ name, key, muiVariant, sample }) => {
          const style = typeStyles[key as keyof typeof typeStyles]
          const fw = style.fontWeight as number
          return (
            <Box key={name} sx={{
              display: 'flex', alignItems: 'center', gap: 2,
              px: 2.5, py: 1.5,
              borderBottom: '1px solid',
              borderColor: 'divider',
              '&:last-child': { borderBottom: 'none' },
            }}>
              {/* Meta */}
              <Box sx={{ width: 200, flexShrink: 0 }}>
                <Typography sx={{ fontSize: 10, color: '#FF5500', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {name}
                </Typography>
                <Typography sx={{ fontSize: 9, color: 'text.secondary', fontFamily: 'monospace', mt: 0.25 }}>
                  {style.fontSize} · {WEIGHT_NAMES[fw] ?? fw} · lh {style.lineHeight}
                </Typography>
                <Typography sx={{ fontSize: 9, color: 'text.disabled', fontFamily: 'monospace' }}>
                  MUI: {muiVariant}
                </Typography>
              </Box>

              {/* Sample */}
              <Box sx={{ flex: 1, overflow: 'hidden' }}>
                <Typography sx={{ ...style, color: 'text.primary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {sample}
                </Typography>
              </Box>
            </Box>
          )
        })}
      </Box>

      {/* Weights */}
      <Box sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '10px',
        overflow: 'hidden',
        mb: 3,
      }}>
        <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
            Weights
          </Typography>
        </Box>
        <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { label: 'Buch / Regular', weight: fontWeight.regular },
            { label: 'Halbfett / SemiBold', weight: fontWeight.semibold },
            { label: 'Extrafett / ExtraBold', weight: fontWeight.extrabold },
          ].map(({ label, weight }) => (
            <Box key={weight} sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
              <Typography sx={{ width: 180, fontSize: 10, fontFamily: 'monospace', color: 'text.secondary' }}>
                {label} · {weight}
              </Typography>
              <Typography sx={{ fontSize: 22, fontWeight: weight, color: 'text.primary' }}>
                AaBbCcDdEeGgNn 0123456789
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Font sizes reference */}
      <Box sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary' }}>
            Font Size Tokens — font/size
          </Typography>
        </Box>
        <Box sx={{ p: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {Object.entries(fontSize).map(([key, px]) => (
            <Chip
              key={key}
              label={`${key} · ${px}px`}
              size="small"
              sx={{ fontFamily: 'monospace', fontSize: 11 }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
