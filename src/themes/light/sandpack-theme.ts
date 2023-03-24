/* Sandpack */
import { SandpackTheme } from '@codesandbox/sandpack-react';

const sandpackTheme: SandpackTheme = {
  colors: {
    accent: '#24292e',
    base: '#24292e',
    clickable: '#959da5',
    disabled: '#d1d4d8',
    error: '#ff453a',
    errorSurface: '#ffeceb',
    hover: '#24292e',
    surface1: '#ffffff',
    surface2: '#f6f8fa',
    surface3: '#f6f8fa'
  },
  syntax: {
    comment: {
      color: '#6a737d',
      fontStyle: 'normal'
    },
    definition: '#6f42c1',
    keyword: '#d73a49',
    plain: '#24292e',
    property: '#005cc5',
    punctuation: '#24292e',
    static: '#032f62',
    string: '#032f62',
    tag: '#22863a'
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    lineHeight: '1.5',
    mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: '14px'
  }
};

export default sandpackTheme;