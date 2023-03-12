export type ThemeBreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ThemeBreakpointFn = (key: ThemeBreakpointKeys) => string;

export type ThemeBreakpointValues = Record<ThemeBreakpointKeys, string>;

export type ThemeBreakpointFnKeys = 'down' | 'up';

export type ThemeBreakpoints = ThemeBreakpointValues & Record<ThemeBreakpointFnKeys, ThemeBreakpointFn>;

const breakpointValues: ThemeBreakpointValues = {
  xs: '420px',
  sm: '580px',
  md: '768px',
  lg: '1024px',
  xl: '1366px'
};

const down: ThemeBreakpointFn = key => `@media (max-width: ${breakpointValues[key]})`;
const up: ThemeBreakpointFn = key => `@media (min-width: ${breakpointValues[key]})`;

const breakpoints: ThemeBreakpoints = {
  ...breakpointValues,
  down,
  up
};

export default breakpoints;