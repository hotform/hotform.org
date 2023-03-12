export interface ThemeColorBase{
  contrastText: string;
  main: string;
}

export interface ThemeTextColors{
  disabled: string;
  link: string;
  primary: string;
  secondary: string;
}

export interface ThemeColors{
  background: string;
  divider: string;
  primary: ThemeColorBase;
  secondary: ThemeColorBase;
  text: ThemeTextColors;
}