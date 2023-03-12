/* Font Sources */
import sourceSansProRegular from '@assets/fonts/source-sans-pro/source-sans-pro-regular.ttf';

export interface ThemeFontSource{
  location: string;
  weight: number;
}

export interface ThemeFont{
  label: string;
  sources: Array<ThemeFontSource>;
}

export type ThemeTypography = Record<'primary', ThemeFont>;

export type ThemeTypographyFontFn = (n: number, input?: number) => string;

export const createThemeFont = (label: string, sources: Array<ThemeFontSource>): ThemeFont => ({
  label,
  sources
});

const themeTypography: ThemeTypography = {
  primary: createThemeFont('primaryFont', [
    {
      location: sourceSansProRegular,
      weight: 400
    }
  ])
};

const minFontSize: number = 12;

export const fontSizes: ThemeTypographyFontFn = (n, input = 2) => `${minFontSize + n * input}px`;

export const letterSpacings: ThemeTypographyFontFn = (n, input = 2) => `${n * input}px`;

export default themeTypography;