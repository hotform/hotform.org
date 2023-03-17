/* Emotion */
import { CSSObject, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  heigh: 30,
  width: 30,
  margin: theme.spacing(0.55, 0),
  cursor: 'pointer'
}));

export interface ButtonProps{
  open?: boolean;
}

const lineBase = (theme: Theme): CSSObject => ({
  width: '100%',
  height: 2,
  background: theme.colors.primary.main,
  transitionDuration: '0.2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease-in-out'
});

export const Button = styled.div<ButtonProps>(({
  open = false,
  theme
}) => ({
  ...lineBase(theme),
  [[
    '::after',
    '::before'
  ].join()]: {
    position: 'absolute',
    content: '""',
    ...lineBase(theme)
  },
  '::before': {
    transform: `translate3d(0, ${theme.spacing(1)}, 0)`
  },
  '::after': {
    transform: `translate3d(0, ${theme.spacing(-1)}, 0)`
  },
  ...(open && {
    background: 'transparent',
    '::before': {
      transform: 'rotate(45deg)'
    },
    '::after': {
      transform: 'rotate(-45deg)'
    }
  })
}));