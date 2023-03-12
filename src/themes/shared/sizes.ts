import breakpoints, { ThemeBreakpointValues } from './breakpoints';

export interface ThemeSizes extends ThemeBreakpointValues{
  maxInnerWidth: string;
  maxInnerHeight: string;
}

const themeSizes: ThemeSizes = {
  ...breakpoints,
  maxInnerWidth: '2560px',
  maxInnerHeight: '1440px'
};

export default themeSizes;