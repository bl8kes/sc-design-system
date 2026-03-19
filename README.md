# SoundCloud Design System

Design system preview built with React, MUI v5, and real Figma tokens.

## Stack

- **Vite** + React + TypeScript
- **MUI v5** — component library
- **Söhne** — typeface (Klim Type Foundry, license required)
- **@mui/icons-material** — Material Icons

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Deploy to Vercel

```bash
# One-time setup
npm install -g vercel

# Deploy
vercel

# Follow prompts:
#   Set up and deploy? Y
#   Which scope? (your account)
#   Link to existing project? N
#   Project name: sc-design-system
#   Directory: ./
#   Build command: npm run build  (auto-detected)
#   Output dir: dist              (auto-detected)
```

Your preview URL will be `https://sc-design-system.vercel.app` (or similar).

Every `git push` to main auto-redeploys.

## Project structure

```
src/
  theme.ts              ← All design tokens + MUI theme
  main.tsx              ← ThemeProvider entry
  App.tsx               ← Sidebar shell + section routing
  sections/
    ColorsSection.tsx   ← Color primitives + semantic tokens
    TypographySection.tsx
    SpacingSection.tsx
    ShapeSection.tsx
    ButtonsSection.tsx
    InputsSection.tsx
    BadgesSection.tsx
    CardsSection.tsx
    IconsSection.tsx
    FeedbackSection.tsx
```

## Using the theme in your app

```tsx
import { ThemeProvider, CssBaseline } from '@mui/material'
import { buildTheme } from './theme'

const theme = buildTheme('light') // or 'dark'

<ThemeProvider theme={theme}>
  <CssBaseline />
  <YourApp />
</ThemeProvider>
```

## Söhne font

Söhne is a licensed font. To load it properly:

1. Obtain `.woff2` files from [Klim Type Foundry](https://klim.co.nz/retail-fonts/sohne/)
2. Place them in `public/fonts/`
3. Update the `@font-face` blocks in `MuiCssBaseline` in `theme.ts`:

```css
@font-face {
  font-family: 'Söhne';
  font-weight: 400;
  src: url('/fonts/sohne-buch.woff2') format('woff2');
}
@font-face {
  font-family: 'Söhne';
  font-weight: 600;
  src: url('/fonts/sohne-halbfett.woff2') format('woff2');
}
@font-face {
  font-family: 'Söhne';
  font-weight: 800;
  src: url('/fonts/sohne-extrafett.woff2') format('woff2');
}
```

Until then the fallback stack (`Helvetica Neue`, `Arial`) will be used.
