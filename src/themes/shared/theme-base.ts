import { ThemeBreakpoints } from './breakpoints';
import { ThemeColors } from './colors';
import { ThemeSizes } from './sizes';
import { ThemeSpacing } from './spacing';
import {
  ThemeFont,
  ThemeFontSource,
  ThemeTypography,
  ThemeTypographyFontFn
} from './typography';

/* Emotion */
import {
  css,
  CSSObject,
  SerializedStyles
} from '@emotion/react';

export interface ThemeBase{
  breakpoints: ThemeBreakpoints;
  colors: ThemeColors;
  fontSizes: ThemeTypographyFontFn;
  highlightStyles?: CSSObject;
  letterSpacings: ThemeTypographyFontFn;
  sizes: ThemeSizes;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
}

export const getFontFace = (label: string, source: ThemeFontSource): CSSObject => ({
  '@font-face': {
    fontFamily: label,
    fontStyle: 'normal',
    fontWeight: source.weight,
    fontDisplay: 'swap',
    src: `url(${source.location})`,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
  }
});

export const getGlobalStyles = (theme: ThemeBase): SerializedStyles => css(
  ...Object.entries<ThemeFont>(theme.typography).map(([ , value ]) => value.sources.map(source => getFontFace(value.label, source))).flat(),
  theme.highlightStyles,
  {
    '*': {
      boxSizing: 'border-box'
    },
    [[
      'html',
      'body'
    ].join()]: {
      height: '100%',
      width: '100%'
    },
    body: {
      margin: 0,
      fontFamily: theme.typography.primary.label,
      fontSize: theme.fontSizes(2.2),
      letterSpacing: theme.letterSpacings(0.25),
      lineHeight: 1.5,
      background: theme.colors.background,
      color: theme.colors.text.primary
    },
    code: {
      overflowWrap: 'break-word',
      letterSpacing: 0
    },
    a: {
      textDecoration: 'none',
      color: theme.colors.text.link,
      ':hover': {
        textDecoration: 'underline'
      }
    },
    ul: {
      marginTop: 0,
      paddingLeft: '2em'
    },
    'li+li': {
      marginTop: '0.25em'
    },
    [[
      'h6',
      'h5',
      'h4'
    ].join()]: {
      fontSize: '1.1em'
    },
    h3: {
      fontSize: '1.25em'
    },
    h2: {
      fontSize: '1.5em'
    },
    h1: {
      fontSize: '2em'
    },
    [[
      'h2',
      'h1'
    ].join()]: {
      paddingBottom: '0.3em',
      borderBottomColor: theme.colors.divider,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1
    }
  }
);