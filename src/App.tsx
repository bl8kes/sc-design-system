import React, { useState } from 'react'
import {
  Box, Drawer, List, ListItemButton, ListItemText,
  Typography, IconButton, Divider, useTheme,
} from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import ColorsSection from './sections/ColorsSection'
import TypographySection from './sections/TypographySection'
import SpacingSection from './sections/SpacingSection'
import ShapeSection from './sections/ShapeSection'
import ButtonsSection from './sections/ButtonsSection'
import InputsSection from './sections/InputsSection'
import BadgesSection from './sections/BadgesSection'
import CardsSection from './sections/CardsSection'
import IconsSection from './sections/IconsSection'
import FeedbackSection from './sections/FeedbackSection'

const SIDEBAR_WIDTH = 200

const NAV = [
  { label: 'Tokens', items: ['Colors', 'Typography', 'Spacing', 'Shape'] },
  { label: 'Components', items: ['Buttons', 'Inputs', 'Badges & Chips', 'Cards', 'Icons', 'Feedback'] },
]

const SECTIONS: Record<string, React.FC> = {
  Colors:         ColorsSection,
  Typography:     TypographySection,
  Spacing:        SpacingSection,
  Shape:          ShapeSection,
  Buttons:        ButtonsSection,
  Inputs:         InputsSection,
  'Badges & Chips': BadgesSection,
  Cards:          CardsSection,
  Icons:          IconsSection,
  Feedback:       FeedbackSection,
}

interface Props {
  mode: 'light' | 'dark'
  onToggleMode: () => void
}

export default function App({ mode, onToggleMode }: Props) {
  const theme = useTheme()
  const [active, setActive] = useState('Colors')
  const Section = SECTIONS[active]

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: SIDEBAR_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: SIDEBAR_WIDTH,
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
            borderRight: `1px solid ${theme.palette.divider}`,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        {/* Logo */}
        <Box sx={{ px: 2.5, py: 2.5, borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            <Box sx={{
              width: 28, height: 28,
              bgcolor: '#FF5500',
              borderRadius: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Typography sx={{ fontSize: 14, color: '#fff', lineHeight: 1 }}>◉</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ color: 'text.primary', display: 'block', fontWeight: 600 }}>
                SoundCloud
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 9 }}>
                Design System
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Nav */}
        <Box sx={{ flex: 1, overflowY: 'auto', py: 1 }}>
          {NAV.map(group => (
            <Box key={group.label}>
              <Typography sx={{
                fontSize: 9, fontWeight: 600, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'text.disabled',
                px: 2.5, pt: 1.5, pb: 0.5,
              }}>
                {group.label}
              </Typography>
              <List disablePadding>
                {group.items.map(item => (
                  <ListItemButton
                    key={item}
                    selected={active === item}
                    onClick={() => setActive(item)}
                    sx={{
                      mx: 1, borderRadius: '6px',
                      py: 0.75, px: 1.5, mb: 0.25,
                      '&.Mui-selected': {
                        bgcolor: 'rgba(255,85,0,0.08)',
                        borderLeft: '2px solid #FF5500',
                        '& .MuiListItemText-primary': { color: '#FF5500' },
                      },
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: 'body2', sx: { color: 'text.secondary', fontSize: 12 } }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          ))}
        </Box>

        {/* Mode toggle */}
        <Divider />
        <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {mode} mode
          </Typography>
          <IconButton size="small" onClick={onToggleMode} sx={{ color: 'text.secondary' }}>
            {mode === 'light' ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
          </IconButton>
        </Box>
      </Drawer>

      {/* Main */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        {/* Section header */}
        <Box sx={{
          px: 5, pt: 4, pb: 3,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}>
          <Typography variant="overline" sx={{ color: '#FF5500', display: 'block', mb: 0.5 }}>
            {NAV.find(g => g.items.includes(active))?.label} / {active}
          </Typography>
          <Typography variant="h4" sx={{ color: 'text.primary' }}>
            {active}
          </Typography>
        </Box>

        {/* Section content */}
        <Box sx={{ px: 5, py: 4 }}>
          <Section />
        </Box>
      </Box>
    </Box>
  )
}
