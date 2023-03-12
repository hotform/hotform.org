import { ThemeBase } from './theme-base';

declare module '@emotion/react'{
  export interface Theme extends ThemeBase{}
}