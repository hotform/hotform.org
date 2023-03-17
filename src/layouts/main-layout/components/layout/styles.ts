import { NAVIGATION_BAR_CONTROL_HEIGHT } from '@layouts/main-layout/components/header/styles';

/* Emotion */
import styled from '@emotion/styled';

export const Container = styled.main(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  margin: theme.spacing(0, 'auto'),
  maxWidth: theme.sizes.maxInnerWidth,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    [[
      'h6',
      'h5',
      'h4',
      'h3',
      'h2',
      'h1'
    ].join()]: {
      scrollMarginTop: NAVIGATION_BAR_CONTROL_HEIGHT
    }
  },
}));

export const ContentContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  margin: theme.spacing(0, 'auto'),
  padding: theme.spacing(3),
  maxWidth: theme.sizes.xl,
  minWidth: 0,
  minHeight: 0,
  flex: 1,
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    gap: 0,
    padding: theme.spacing(0, 3, 3)
  }
}));

export const Content = styled.div(({ theme }) => ({
  padding: theme.spacing(0, 3),
  borderColor: theme.colors.divider,
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: 5,
  [theme.breakpoints.down('lg')]: {
    padding: 0,
    border: 'none'
  }
}));