/* Emotion */
import {
  CSSObject,
  Theme
} from '@emotion/react';

export const sandpackLayoutBase = (theme: Theme): CSSObject => ({
  'code': {
    background: 'transparent'
  },
  margin: '1.4em 0',
  borderColor: theme.colors.divider,
  '.sp-code-editor': {
    '.cm-gutters': {
      '.cm-lineNumbers': {
        padding: '0 0.2em',
        fontSize: theme.sandpackTheme.font.size,
        color: theme.colors.text.secondary,
        '.cm-gutterElement': {
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }
      }
    }
  },
  '.sp-stack': {
    borderRadius: 5
  }
});