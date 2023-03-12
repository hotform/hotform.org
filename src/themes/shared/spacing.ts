export type ThemeSpacingValues = number | 'auto';

export type ThemeSpacing = (...args: Array<ThemeSpacingValues>) => string;

const spacingInput: number = 8;

const fn: ThemeSpacing = (...args) => args.map(n => n === 'auto' ? n : `${n * spacingInput}px`).join(' ');

export default fn;