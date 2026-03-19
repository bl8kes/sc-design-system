import { createTheme, alpha } from '@mui/material/styles';

// =============================================================================
// LAYER 1 — BASE COLOR PRIMITIVES
// Source: Figma "base colors" collection (112 variables)
// =============================================================================

const base = {
  black: { 0: '#121212' },
  white: { 0: '#FFFFFF' },

  grey: {
    50:  '#FAFAFA',
    100: '#F3F3F3',
    200: '#DDDDDD',
    300: '#C6C6C6',
    400: '#999999',
    500: '#808080',
    600: '#666666',
    700: '#595959',
    800: '#454545',
    900: '#303030',
    950: '#272727',
  },

  orange: {
    50:  '#FCE9E6',
    100: '#FFCBB8',
    200: '#FFAA8A',
    300: '#FF895A',
    400: '#FF6E33',
    500: '#FF5500', // brand primary
    600: '#F44F00',
    700: '#E64800',
    800: '#DE3700',
    900: '#C13100',
    950: '#662200',
  },

  red: {
    50:  '#FFEBEE',
    100: '#FBB9C6',
    200: '#F78CA1',
    300: '#F25D7C',
    400: '#EC5261',
    500: '#E61948',
    600: '#D61348',
    700: '#C10B44',
    800: '#B40030',
    900: '#940027',
    950: '#5C0A1D',
  },

  yellow: {
    50:  '#FFF8E1',
    100: '#FFECB3',
    200: '#FFE183',
    300: '#FFD650',
    400: '#FFCB29',
    500: '#FFC20B',
    600: '#FFB403',
    700: '#FFA102',
    800: '#FF9002',
    900: '#D07600',
    950: '#9D5900',
  },

  green: {
    50:  '#E6F7EE',
    100: '#C3EAD4',
    200: '#9CDDBA',
    300: '#70D19E',
    400: '#4BC689',
    500: '#19BB74',
    600: '#0FAC69',
    700: '#00995C',
    800: '#008850',
    900: '#00652D',
    950: '#0A4B2E',
  },

  teal: {
    50:  '#E0F1F3',
    100: '#B2DDDF',
    200: '#7FC7CA',
    300: '#4CB1B4',
    400: '#25A1A2',
    500: '#009090',
    600: '#018382',
    700: '#037472',
    800: '#076461',
    900: '#094844',
    950: '#0F3433',
  },

  blue: {
    50:  '#EBF2FF',
    100: '#D7E5FE',
    200: '#A5C4FD',
    300: '#699FFF',
    400: '#5590FC',
    500: '#2D76FB',
    600: '#055CFA',
    700: '#044DD2',
    800: '#033EAA',
    900: '#023082',
    950: '#0A245A',
  },

  violet: {
    50:  '#F0E6FA',
    100: '#D7C1F3',
    200: '#BD97EC',
    300: '#A26AE5',
    400: '#8D46DF',
    500: '#7618D8',
    600: '#6C12D2',
    700: '#5C02CA',
    800: '#4D00C4',
    900: '#3E058D',
    950: '#2F0A56',
  },

  purple: {
    50:  '#FFE3F5',
    100: '#F2BCE3',
    200: '#DB92C4',
    300: '#CB66AD',
    400: '#BE449C',
    500: '#B0228D',
    600: '#A31D87',
    700: '#931580',
    800: '#830F79',
    900: '#68066B',
    950: '#460E38',
  },

  magenta: {
    50:  '#FDE5EF',
    100: '#FBBCD7',
    200: '#FA91BD',
    300: '#F962A1',
    400: '#F83C8B',
    500: '#F90274',
    600: '#E70271',
    700: '#D0026B',
    800: '#BB0067',
    900: '#95005F',
    950: '#64012E',
  },

  pro:    { main: '#CFB25D', dark: '#9F8C6A', light: '#F7F3E5' },
  artist: { main: '#7564F5', dark: '#5D4FC8', light: '#EEE8FE' },
} as const;

// =============================================================================
// LAYER 1b — DESIGN TOKENS (non-color)
// Source: Figma "shape", "sizing", "breakpoints" collections
// =============================================================================

/** Border radius — source: shape collection */
export const radius = {
  none:   0,
  small:  4,   // smallRadius
  medium: 8,   // mediumRadius
  large:  16,  // largeRadius
  xlarge: 24,  // xlargeRadius
  full:   9999, // Full
} as const;

/** Stroke — source: Size/Stroke collection */
export const stroke = {
  border: 1,
} as const;

/** Spacing — source: sizing collection (8px base × multiplier) */
export const sizing = {
  '1x':  8,
  '2x':  16,
  '3x':  24,
  '4x':  32,
  '5x':  40,
  '6x':  48,
  '7x':  56,
  '8x':  64,
  '9x':  72,
  '10x': 80,
  '11x': 88,
  '12x': 96,
} as const;

/** Breakpoints — source: breakpoints collection */
export const breakpoints = {
  mobile:  { min: 320, max: 640 },
  tablet:  { min: 640, max: 960 },
  desktop: { min: 960, max: 1440 },
} as const;

// =============================================================================
// LAYER 1c — TYPOGRAPHY PRIMITIVES
// Source: Figma "font/size" and "font/weight" collections + type style table
//
// Font: Söhne by Klim Type Foundry
//   Buch     = Regular  (weight 400)
//   Halbfett = SemiBold (weight 600)
//   Extrafett= ExtraBold(weight 800)
//
// Fallback stack for environments without Söhne license:
//   "Söhne", "Helvetica Neue", "Arial", sans-serif
// =============================================================================

export const fontFamily = {
  sans: '"Söhne", "Helvetica Neue", "Arial", sans-serif',
} as const;

/** font/size tokens (raw px values) */
export const fontSize = {
  xxs: 11,
  xs:  12,
  sm:  13,
  md:  14,
  lg:  16,
  xl:  20,
  '2xl': 28,
  '3xl': 32,
  '4xl': 40,
  '5xl': 60,
  '6xl': 64,
  '0':   96,
} as const;

/** font/weight tokens */
export const fontWeight = {
  regular:   400, // Buch
  semibold:  600, // Halbfett
  extrabold: 800, // Extrafett
} as const;

/**
 * Named type styles — source: Figma typography style table
 *
 * Columns: weight | fontSize | lineHeight | letterSpacing
 *
 * Note: lineHeight is stored as px from Figma but converted to unitless
 * ratio (lineHeight / fontSize) for CSS compatibility.
 * letterSpacing is stored as em values from the Figma table.
 */
export const typeStyles = {
  display0: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.semibold,  // Halbfett
    fontSize:      '6rem',               // 96px
    lineHeight:    1,                    // 96px / 96px
    letterSpacing: '-0.019em',           // -2% / -1.9px
  },
  display1: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.semibold,
    fontSize:      '3.75rem',            // 60px
    lineHeight:    1,                    // 60px / 60px (0% = no extra)
    letterSpacing: '0em',
  },
  display2: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.semibold,
    fontSize:      '3.75rem',            // 40px font, 42px line height
    lineHeight:    1.05,                 // 42/40
    letterSpacing: '0.02em',
  },
  display3: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.semibold,
    fontSize:      '2rem',               // 32px font, 36px line height
    lineHeight:    1.125,                // 36/32
    letterSpacing: '0.02em',
  },
  display4: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.extrabold, // Extrafett
    fontSize:      '1.75rem',            // 28px font, 32px line height
    lineHeight:    1.143,                // 32/28
    letterSpacing: '0.04em',
  },
  display5: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.extrabold,
    fontSize:      '1rem',               // 16px font, 18px line height
    lineHeight:    1.125,                // 18/16
    letterSpacing: '0.01em',
  },
  heading1: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.semibold,
    fontSize:      '1.75rem',            // 28px font, 32px line height
    lineHeight:    1.143,                // 32/28
    letterSpacing: '0.02em',
  },
  heading2: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.semibold,
    fontSize:      '1.25rem',            // 20px font, 24px line height
    lineHeight:    1.2,                  // 24/20
    letterSpacing: '0.02em',
  },
  heading3: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.semibold,
    fontSize:      '1rem',               // 16px font, 24px line height
    lineHeight:    1.5,                  // 24/16
    letterSpacing: '0.01em',
  },
  heading4: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.semibold,
    fontSize:      '0.875rem',           // 14px font, 20px line height
    lineHeight:    1.429,                // 20/14
    letterSpacing: '0.019em',
  },
  heading5: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.semibold,
    fontSize:      '0.75rem',            // 12px font, 16px line height
    lineHeight:    1.333,                // 16/12
    letterSpacing: '0.013em',
  },
  heading6: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.semibold,
    fontSize:      '0.688rem',           // 11px font, 16px line height
    lineHeight:    1.455,                // 16/11
    letterSpacing: '0.1em',             // +10% — allcaps style
    textTransform: 'uppercase' as const,
  },
  bodyLarge: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.regular,   // Buch
    fontSize:      '1rem',               // 16px font, 24px line height
    lineHeight:    1.5,                  // 24/16
    letterSpacing: '0.01em',
  },
  body: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.regular,
    fontSize:      '0.875rem',           // 14px font, 20px line height
    lineHeight:    1.429,                // 20/14
    letterSpacing: '0.01em',
  },
  caption: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.regular,
    fontSize:      '0.75rem',            // 12px font, 16px line height
    lineHeight:    1.333,                // 16/12
    letterSpacing: '0.01em',
  },
  micro: {
    fontFamily:    fontFamily.sans,
    fontWeight:    fontWeight.regular,
    fontSize:      '0.688rem',           // 11px font, 16px line height
    lineHeight:    1.455,                // 16/11
    letterSpacing: '0em',
  },
} as const;

// =============================================================================
// LAYER 2 — SEMANTIC COLOR TOKENS
// Source: Figma "palette" collection, light + dark mode columns
// =============================================================================

const lightTokens = {
  background: {
    default:  base.white[0],
    low:      base.grey[100],
    mid:      base.grey[200],
    high:     base.grey[300],
    contrast: '#FFFFFF',
  },
  text: {
    primary:   base.black[0],
    secondary: `${base.black[0]}80`,  // 50%
    disabled:  `${base.black[0]}61`,  // 38%
  },
  border: {
    subtle:  `${base.black[0]}26`,    // 15%
    default: `${base.black[0]}40`,    // 25%
  },
  primary: {
    main:          base.black[0],
    dark:          base.grey[700],
    light:         base.grey[500],
    contrastText:  base.white[0],
    outlinedBorder:base.black[0],
    hover:         `${base.black[0]}14`, // 8%
  },
  secondary: {
    main:          base.grey[600],
    dark:          base.grey[200],
    light:         base.grey[100],
    contrastText:  base.black[0],
    outlinedBorder:base.grey[200],
    hover:         `${base.grey[500]}14`,
  },
  error: {
    main:          base.red[500],
    dark:          base.red[800],
    light:         base.red[400],
    contrastText:  base.white[0],
    hover:         `${base.red[500]}0A`,
    focusVisible:  `${base.red[500]}4D`,
    outlinedBorder:`${base.red[500]}80`,
  },
  warning: {
    main:          base.yellow[700],
    dark:          base.yellow[800],
    light:         base.yellow[400],
    contrastText:  base.white[0],
    hover:         `${base.yellow[700]}0A`,
    focusVisible:  `${base.yellow[700]}4D`,
    outlinedBorder:`${base.yellow[700]}80`,
  },
  success: {
    main:          base.green[800],
    dark:          base.green[900],
    light:         base.green[400],
    contrastText:  base.white[0],
    hover:         `${base.green[800]}0A`,
    focusVisible:  `${base.green[800]}4D`,
    outlinedBorder:`${base.green[800]}80`,
  },
  info: {
    main:          base.grey[700],
    dark:          base.grey[900],
    light:         base.grey[300],
    contrastText:  base.white[0],
  },
  action: {
    active:            base.black[0],
    secondary:         base.grey[900],
    hover:             `${base.black[0]}0F`, // 6%
    selected:          `${base.black[0]}0F`,
    disabled:          `${base.black[0]}29`, // 16%
    disabledBackground:`${base.black[0]}1F`, // 12%
  },
  backdrop: {
    main:   `${base.black[0]}66`,
    medium: `${base.black[0]}99`,
    strong: `${base.black[0]}BF`,
  },
};

const darkTokens = {
  background: {
    default:  base.black[0],
    low:      base.grey[950],
    mid:      base.grey[900],
    high:     base.grey[800],
    contrast: base.white[0],
  },
  text: {
    primary:   base.grey[50],
    secondary: `${base.grey[50]}99`,  // 60%
    disabled:  `${base.grey[50]}40`,  // 25%
  },
  border: {
    subtle:  `${base.grey[50]}26`,    // 15%
    default: `${base.grey[50]}40`,    // 25%
  },
  primary: {
    main:          base.grey[50],
    dark:          base.grey[400],
    light:         base.grey[600],
    contrastText:  base.black[0],
    outlinedBorder:base.grey[50],
    hover:         `${base.grey[50]}29`, // 16%
  },
  secondary: {
    main:          base.grey[500],
    dark:          base.grey[700],
    light:         base.grey[900],
    contrastText:  base.grey[50],
    outlinedBorder:base.grey[900],
    hover:         `${base.grey[500]}29`,
  },
  error: {
    main:          base.red[500],
    dark:          base.red[700],
    light:         base.red[200],
    contrastText:  base.grey[50],
    hover:         `${base.red[500]}14`,
    focusVisible:  `${base.red[500]}4D`,
    outlinedBorder:`${base.red[500]}80`,
  },
  warning: {
    main:          base.yellow[400],
    dark:          base.yellow[700],
    light:         base.yellow[200],
    contrastText:  `${base.black[0]}DE`, // 87%
    hover:         `${base.yellow[400]}14`,
    focusVisible:  `${base.yellow[400]}4D`,
    outlinedBorder:`${base.yellow[400]}80`,
  },
  success: {
    main:          base.green[700],
    dark:          base.green[950],
    light:         base.green[300],
    contrastText:  base.grey[50],
    hover:         `${base.green[700]}14`,
    focusVisible:  `${base.green[700]}4D`,
    outlinedBorder:`${base.green[700]}80`,
  },
  info: {
    main:          base.grey[700],
    dark:          base.grey[900],
    light:         base.grey[300],
    contrastText:  base.grey[50],
  },
  action: {
    active:            base.grey[50],
    secondary:         base.grey[400],
    hover:             `${base.grey[50]}0F`,
    selected:          `${base.grey[50]}0F`,
    disabled:          `${base.grey[50]}1F`,
    disabledBackground:`${base.grey[50]}14`,
  },
  backdrop: {
    main:   `${base.black[0]}66`,
    medium: `${base.black[0]}99`,
    strong: `${base.black[0]}BF`,
  },
};

// =============================================================================
// THEME FACTORY
// =============================================================================

function buildTheme(mode: 'light' | 'dark') {
  const t = mode === 'light' ? lightTokens : darkTokens;

  return createTheme({
    palette: {
      mode,
      primary: {
        main:         t.primary.main,
        dark:         t.primary.dark,
        light:        t.primary.light,
        contrastText: t.primary.contrastText,
      },
      secondary: {
        main:         t.secondary.main,
        dark:         t.secondary.dark,
        light:        t.secondary.light,
        contrastText: t.secondary.contrastText,
      },
      error: {
        main:         t.error.main,
        dark:         t.error.dark,
        light:        t.error.light,
        contrastText: t.error.contrastText,
      },
      warning: {
        main:         t.warning.main,
        dark:         t.warning.dark,
        light:        t.warning.light,
        contrastText: t.warning.contrastText,
      },
      success: {
        main:         t.success.main,
        dark:         t.success.dark,
        light:        t.success.light,
        contrastText: t.success.contrastText,
      },
      info: {
        main:         t.info.main,
        dark:         t.info.dark,
        light:        t.info.light,
        contrastText: t.info.contrastText,
      },
      text: {
        primary:   t.text.primary,
        secondary: t.text.secondary,
        disabled:  t.text.disabled,
      },
      background: {
        default: t.background.default,
        paper:   t.background.low,
      },
      divider: t.border.subtle,
      action: {
        hover:             t.action.hover,
        selected:          t.action.selected,
        disabled:          t.action.disabled,
        disabledBackground:t.action.disabledBackground,
      },
      // @ts-ignore — augment via src/types/mui.d.ts for full TS support
      brand:    { main: base.orange[500] },
      link:     { main: mode === 'light' ? base.blue[700] : base.blue[400] },
      pro:      base.pro,
      artist:   base.artist,
      getHeard: {
        surface: base.violet[700],
        label:   base.violet[400],
        icon:    base.violet[200],
      },
      backdrop: t.backdrop,
      border:   t.border,
    },

    // -------------------------------------------------------------------------
    // Typography — Söhne type system
    // Maps Figma named styles to MUI variant names
    // -------------------------------------------------------------------------
    typography: {
      fontFamily: fontFamily.sans,

      // Display scale → MUI h1–h3
      h1: typeStyles.display0,  // 96px — hero/marketing only
      h2: typeStyles.display3,  // 32px — page titles
      h3: typeStyles.display4,  // 28px extrabold — section titles

      // Heading scale → MUI h4–h6
      h4: typeStyles.heading1,  // 28px semibold
      h5: typeStyles.heading2,  // 20px semibold
      h6: typeStyles.heading3,  // 16px semibold

      // Body scale → MUI body / subtitle
      subtitle1: typeStyles.heading4,  // 14px semibold — labels/overlines
      subtitle2: typeStyles.heading5,  // 12px semibold
      body1:     typeStyles.bodyLarge, // 16px regular — primary reading
      body2:     typeStyles.body,      // 14px regular — secondary reading

      // Utility
      caption:  typeStyles.caption,    // 12px regular
      overline: typeStyles.heading6,   // 11px semibold uppercase

      // Button text
      button: {
        ...typeStyles.body,
        fontWeight:    fontWeight.semibold,
        textTransform: 'none' as const,
      },
    },

    // Spacing uses the sizing collection: 1 unit = 8px
    spacing: 8,

    shape: { borderRadius: radius.medium }, // 8px default

    breakpoints: {
      values: {
        xs:  breakpoints.mobile.min,   // 320
        sm:  breakpoints.mobile.max,   // 640
        md:  breakpoints.tablet.max,   // 960
        lg:  breakpoints.desktop.min,  // 960 (same as md intentional — desktop starts here)
        xl:  breakpoints.desktop.max,  // 1440
      },
    },

    // -------------------------------------------------------------------------
    // Component overrides
    // -------------------------------------------------------------------------
    components: {

      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Söhne';
            font-weight: 400;
            font-style: normal;
            src: local('Söhne Buch'), local('SoehneBuch');
          }
          @font-face {
            font-family: 'Söhne';
            font-weight: 600;
            font-style: normal;
            src: local('Söhne Halbfett'), local('SoehneHalbfett');
          }
          @font-face {
            font-family: 'Söhne';
            font-weight: 800;
            font-style: normal;
            src: local('Söhne Extrafett'), local('SoehneExtrafett');
          }
        `,
      },

      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            borderRadius:  radius.full,
            fontFamily:    fontFamily.sans,
            fontWeight:    fontWeight.semibold,
            textTransform: 'none',
            letterSpacing: typeStyles.body.letterSpacing,
            transition:    'background-color 150ms ease, box-shadow 150ms ease, opacity 150ms ease',
            '&:focus-visible': {
              outline:       `2px solid ${base.orange[500]}`,
              outlineOffset: '2px',
            },
            '&.Mui-disabled': { opacity: 0.38, pointerEvents: 'none' },
          },
          sizeSmall:  { height: '32px', padding: '0 12px', fontSize: '0.8125rem' },
          sizeMedium: { height: '40px', padding: '0 16px', fontSize: typeStyles.body.fontSize },
          sizeLarge:  { height: '48px', padding: '0 24px', fontSize: typeStyles.bodyLarge.fontSize },
          contained: {
            backgroundColor: t.primary.main,
            color:           t.primary.contrastText,
            '&:hover': {
              backgroundColor: t.primary.dark,
              boxShadow:       '0 4px 6px rgba(0,0,0,0.12)',
            },
          },
          outlined: {
            backgroundColor: 'transparent',
            borderColor:     t.border.default,
            color:           t.text.primary,
            '&:hover': {
              backgroundColor: t.action.hover,
              borderColor:     t.text.secondary,
            },
          },
          text: {
            color: t.text.primary,
            '&:hover': { backgroundColor: t.action.hover },
          },
        },
        variants: [
          {
            props: { variant: 'brand' } as any,
            style: {
              backgroundColor: base.orange[500],
              color:           '#FFFFFF',
              border:          'none',
              '&:hover':  { backgroundColor: base.orange[600] },
              '&:active': { backgroundColor: base.orange[700] },
              '&.Mui-disabled': { opacity: 0.38, backgroundColor: base.orange[500], color: '#FFFFFF' },
            },
          },
          {
            props: { variant: 'danger' } as any,
            style: {
              backgroundColor: t.error.main,
              color:           '#FFFFFF',
              border:          'none',
              '&:hover':  { backgroundColor: t.error.dark },
              '&.Mui-disabled': { opacity: 0.38, backgroundColor: t.error.main, color: '#FFFFFF' },
            },
          },
        ],
      },

      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: radius.medium,
            transition:   'background-color 150ms ease',
            '&:hover': { backgroundColor: t.action.hover },
            '&:focus-visible': {
              outline:       `2px solid ${base.orange[500]}`,
              outlineOffset: '2px',
            },
          },
        },
      },

      MuiTextField: {
        defaultProps: { variant: 'outlined', size: 'medium' },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            fontFamily:      fontFamily.sans,
            fontSize:        typeStyles.bodyLarge.fontSize,
            letterSpacing:   typeStyles.bodyLarge.letterSpacing,
            borderRadius:    radius.medium,
            backgroundColor: t.background.default,
            transition:      'border-color 150ms ease, box-shadow 150ms ease',
            '& .MuiOutlinedInput-notchedOutline': { borderColor: t.border.default },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: t.text.secondary },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: base.orange[500],
              borderWidth: `${stroke.border}px`,
            },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: t.error.main },
            '&.Mui-disabled': { opacity: 0.38, backgroundColor: t.background.low },
          },
          input: {
            '&::placeholder': { color: t.text.disabled, opacity: 1 },
          },
        },
      },

      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontFamily: fontFamily.sans,
            color:      t.text.secondary,
            fontSize:   typeStyles.body.fontSize,
            '&.Mui-focused': { color: base.orange[500] },
            '&.Mui-error':   { color: t.error.main },
          },
        },
      },

      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontFamily:    fontFamily.sans,
            color:         t.text.secondary,
            fontSize:      typeStyles.caption.fontSize,
            letterSpacing: typeStyles.caption.letterSpacing,
            '&.Mui-error': { color: t.error.main },
          },
        },
      },

      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            backgroundColor: t.background.low,
            border:          `${stroke.border}px solid ${t.border.subtle}`,
            borderRadius:    radius.large,
            backgroundImage: 'none',
          },
        },
        variants: [
          {
            props: { variant: 'outlined' },
            style: { boxShadow: 'none', border: `${stroke.border}px solid ${t.border.default}` },
          },
          {
            props: { variant: 'elevated' } as any,
            style: { border: 'none', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' },
          },
        ],
      },

      MuiCardContent: {
        styleOverrides: {
          root: { padding: sizing['2x'], '&:last-child': { paddingBottom: sizing['2x'] } },
        },
      },

      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: t.background.low,
            borderRadius:    radius.xlarge,
            boxShadow:       '0 10px 15px rgba(0,0,0,0.15)',
            backgroundImage: 'none',
          },
        },
      },

      MuiBackdrop: {
        styleOverrides: {
          root: { backgroundColor: t.backdrop.medium },
        },
      },

      MuiDialogTitle: {
        styleOverrides: {
          root: {
            ...typeStyles.heading2,
            padding: `${sizing['3x']}px ${sizing['3x']}px ${sizing['2x']}px`,
            color:   t.text.primary,
          },
        },
      },

      MuiDialogContent: {
        styleOverrides: {
          root: { padding: `${sizing['1x']}px ${sizing['3x']}px`, color: t.text.secondary },
        },
      },

      MuiDialogActions: {
        styleOverrides: {
          root: { padding: `${sizing['2x']}px ${sizing['3x']}px`, gap: sizing['1x'] },
        },
      },

      MuiBadge: {
        styleOverrides: {
          badge: {
            fontFamily:   fontFamily.sans,
            fontWeight:   fontWeight.semibold,
            fontSize:     typeStyles.micro.fontSize,
            letterSpacing:typeStyles.micro.letterSpacing,
            backgroundColor: base.orange[500],
            color:           '#FFFFFF',
            padding:         '0 6px',
            height:          '20px',
            minWidth:        '20px',
            borderRadius:    radius.full,
          },
          colorSecondary: { backgroundColor: t.secondary.main },
          colorError:     { backgroundColor: t.error.main },
          colorSuccess:   { backgroundColor: t.success.main },
          colorWarning:   { backgroundColor: t.warning.main },
        },
      },

      MuiTooltip: {
        defaultProps: { arrow: true },
        styleOverrides: {
          tooltip: {
            ...typeStyles.caption,
            fontFamily:    fontFamily.sans,
            backgroundColor: mode === 'light' ? base.grey[900] : base.grey[100],
            color:           mode === 'light' ? base.grey[50]  : base.grey[900],
            borderRadius:    radius.small,
            padding:         '6px 10px',
            maxWidth:        '240px',
          },
          arrow: { color: mode === 'light' ? base.grey[900] : base.grey[100] },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            ...typeStyles.caption,
            fontFamily:    fontFamily.sans,
            fontWeight:    fontWeight.semibold,
            backgroundColor: t.background.mid,
            color:           t.text.primary,
            border:          `${stroke.border}px solid ${t.border.subtle}`,
            borderRadius:    radius.full,
            height:          '28px',
            transition:      'background-color 150ms ease',
            '&:hover': { backgroundColor: t.background.high },
            '&.MuiChip-outlined': {
              backgroundColor: 'transparent',
              borderColor:     t.border.default,
            },
          },
          label:      { padding: `0 ${sizing['1x']}px` },
          sizeSmall:  { height: '22px', fontSize: typeStyles.micro.fontSize },
          deleteIcon: { color: t.text.secondary, '&:hover': { color: t.text.primary } },
        },
      },

      MuiDivider: {
        styleOverrides: { root: { borderColor: t.border.subtle } },
      },

      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: radius.small,
            transition:   'background-color 150ms ease',
            '&:hover': { backgroundColor: t.action.hover },
            '&.Mui-selected': {
              backgroundColor: alpha(base.orange[500], 0.1),
              '&:hover': { backgroundColor: alpha(base.orange[500], 0.15) },
            },
            '&:focus-visible': {
              outline:       `2px solid ${base.orange[500]}`,
              outlineOffset: '2px',
            },
          },
        },
      },

      MuiSelect: {
        styleOverrides: {
          root: { borderRadius: radius.medium },
          icon: { color: t.text.secondary },
        },
      },

      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily:    fontFamily.sans,
            fontSize:      typeStyles.body.fontSize,
            letterSpacing: typeStyles.body.letterSpacing,
            borderRadius:  radius.small,
            margin:        '2px 4px',
            '&:hover': { backgroundColor: t.action.hover },
            '&.Mui-selected': {
              backgroundColor: alpha(base.orange[500], 0.1),
              color:           base.orange[500],
              '&:hover': { backgroundColor: alpha(base.orange[500], 0.15) },
            },
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root:       { backgroundImage: 'none' },
          elevation1: { boxShadow: '0 1px 2px rgba(0,0,0,0.05)'  },
          elevation2: { boxShadow: '0 4px 6px rgba(0,0,0,0.1)'   },
          elevation3: { boxShadow: '0 10px 15px rgba(0,0,0,0.1)' },
          elevation4: { boxShadow: '0 20px 25px rgba(0,0,0,0.15)'},
        },
      },

      MuiTabs: {
        styleOverrides: {
          root:      { borderBottom: `${stroke.border}px solid ${t.border.subtle}` },
          indicator: {
            backgroundColor: base.orange[500],
            height:          '2px',
            borderRadius:    `${radius.full}px ${radius.full}px 0 0`,
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily:    fontFamily.sans,
            fontSize:      typeStyles.body.fontSize,
            fontWeight:    fontWeight.semibold,
            letterSpacing: typeStyles.body.letterSpacing,
            textTransform: 'none',
            color:         t.text.secondary,
            padding:       `${sizing['2x']}px`,
            minHeight:     `${sizing['6x']}px`,
            transition:    'color 150ms ease',
            '&:hover':        { color: t.text.primary },
            '&.Mui-selected': { color: t.text.primary },
          },
        },
      },

      MuiAlert: {
        styleOverrides: {
          root:            { borderRadius: radius.medium, fontFamily: fontFamily.sans },
          standardSuccess: { backgroundColor: alpha(t.success.main, 0.1), color: t.success.dark },
          standardError:   { backgroundColor: alpha(t.error.main,   0.1), color: t.error.dark   },
          standardWarning: { backgroundColor: alpha(t.warning.main, 0.1), color: t.warning.dark },
          standardInfo:    { backgroundColor: alpha(t.info.main,    0.1), color: t.info.dark    },
        },
      },

      MuiSwitch: {
        styleOverrides: {
          track: { borderRadius: radius.full, backgroundColor: t.border.default, opacity: 1 },
          switchBase: {
            '&.Mui-checked + .MuiSwitch-track': { backgroundColor: base.orange[500], opacity: 1 },
          },
        },
      },

      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: t.border.default,
            '&.Mui-checked': { color: base.orange[500] },
            '&:hover': { backgroundColor: alpha(base.orange[500], 0.08) },
          },
        },
      },

      MuiRadio: {
        styleOverrides: {
          root: {
            color: t.border.default,
            '&.Mui-checked': { color: base.orange[500] },
            '&:hover': { backgroundColor: alpha(base.orange[500], 0.08) },
          },
        },
      },

      MuiSlider: {
        styleOverrides: {
          root:  { color: base.orange[500], height: 4 },
          thumb: {
            '&:hover, &.Mui-focusVisible': {
              boxShadow: `0 0 0 6px ${alpha(base.orange[500], 0.16)}`,
            },
          },
          rail: { backgroundColor: t.border.default, opacity: 1, borderRadius: radius.full },
        },
      },

      MuiLinearProgress: {
        styleOverrides: {
          root: { borderRadius: radius.full, backgroundColor: t.border.subtle, height: '4px' },
          bar:  { borderRadius: radius.full },
        },
      },

      MuiSkeleton: {
        styleOverrides: {
          root: { backgroundColor: t.background.mid, borderRadius: radius.small },
        },
      },

      MuiAvatar: {
        styleOverrides: {
          root: {
            ...typeStyles.body,
            fontFamily:  fontFamily.sans,
            fontWeight:  fontWeight.semibold,
            backgroundColor: t.background.high,
            color:           t.text.secondary,
          },
        },
      },

      MuiPopover: {
        styleOverrides: {
          paper: {
            boxShadow:    '0 10px 15px rgba(0,0,0,0.15)',
            border:       `${stroke.border}px solid ${t.border.subtle}`,
            borderRadius: radius.medium,
          },
        },
      },

      MuiMenu: {
        styleOverrides: {
          paper: {
            boxShadow:    '0 10px 15px rgba(0,0,0,0.15)',
            border:       `${stroke.border}px solid ${t.border.subtle}`,
            borderRadius: radius.medium,
            padding:      '4px 0',
          },
        },
      },

      MuiAppBar: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            backgroundColor: t.background.default,
            color:           t.text.primary,
            borderBottom:    `${stroke.border}px solid ${t.border.subtle}`,
            backgroundImage: 'none',
          },
        },
      },

      MuiTableHead: {
        styleOverrides: { root: { backgroundColor: t.background.low } },
      },

      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily:   fontFamily.sans,
            borderBottom: `${stroke.border}px solid ${t.border.subtle}`,
            padding:      `${sizing['2x']}px`,
            fontSize:     typeStyles.body.fontSize,
            color:        t.text.primary,
          },
          head: {
            ...typeStyles.heading6,
            color: t.text.secondary,
          },
        },
      },

      MuiTableRow: {
        styleOverrides: {
          root: {
            transition: 'background-color 150ms ease',
            '&:hover': { backgroundColor: t.background.low },
            '&.Mui-selected': {
              backgroundColor: alpha(base.orange[500], 0.08),
              '&:hover': { backgroundColor: alpha(base.orange[500], 0.12) },
            },
          },
        },
      },

      MuiPaginationItem: {
        styleOverrides: {
          root: {
            fontFamily:    fontFamily.sans,
            fontSize:      typeStyles.body.fontSize,
            fontWeight:    fontWeight.semibold,
            letterSpacing: typeStyles.body.letterSpacing,
            borderRadius:  radius.small,
            color:         t.text.secondary,
            border:        'none',
            '&:hover': { backgroundColor: t.action.hover, color: t.text.primary },
            '&.Mui-selected': {
              backgroundColor: base.orange[500],
              color:           '#FFFFFF',
              '&:hover': { backgroundColor: base.orange[600] },
            },
          },
        },
      },

      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            boxShadow:    '0 10px 15px rgba(0,0,0,0.15)',
            border:       `${stroke.border}px solid ${t.border.subtle}`,
            borderRadius: radius.medium,
          },
          option: {
            fontFamily:   fontFamily.sans,
            fontSize:     typeStyles.body.fontSize,
            borderRadius: radius.small,
            margin:       '2px 4px',
            '&:hover': { backgroundColor: t.action.hover },
            '&[aria-selected="true"]': {
              backgroundColor: `${alpha(base.orange[500], 0.1)} !important`,
              color:           base.orange[500],
            },
          },
        },
      },

      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: t.background.low,
            border:          'none',
            boxShadow:       '0 20px 25px rgba(0,0,0,0.2)',
          },
        },
      },
    },
  });
}

// =============================================================================
// EXPORTS
// =============================================================================

const lightTheme = buildTheme('light');
const darkTheme  = buildTheme('dark');

/** Default export — light theme, ready for ThemeProvider */
export default lightTheme;
export { lightTheme, darkTheme, buildTheme };

/**
 * Raw token exports for use outside MUI
 * e.g. styled-components, Tailwind CSS vars, Canvas/WebGL
 */
export { base as baseColors, lightTokens, darkTokens };
