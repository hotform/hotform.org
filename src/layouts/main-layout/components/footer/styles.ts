/* Emotion */
import { CSSObject, Theme } from '@emotion/react';
import styled from '@emotion/styled';

/* Gatsby */
import { Link } from 'gatsby';

export const Container = styled.footer(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(3, 3, 0),
  borderTopColor: theme.colors.divider,
  borderTopStyle: 'solid',
  borderTopWidth: 1,
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(3, 0, 0)
  }
}));

export const EditLink = styled.a(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  margin: theme.spacing(0, 2),
  color: theme.colors.primary.main
}));

export const OptionContainer = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  width: '100%',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column'
  }
}));

export const optionLinkBase = (theme: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  maxWidth: '50%',
  width: '100%',
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),
  color: theme.colors.primary.main,
  borderColor: theme.colors.divider,
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: 5,
  ':hover': {
    textDecoration: 'none',
    background: theme.colors.primary.main,
    color: theme.colors.primary.contrastText
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%'
  }
});

export const PreviousLink = styled(Link)(({ theme }) => ({
  ...optionLinkBase(theme),
  alignItems: 'flex-start'
}));

export const NextLink = styled(Link)(({ theme }) => ({
  ...optionLinkBase(theme),
  alignItems: 'flex-end',
  margin: theme.spacing(0, 0, 0, 'auto')
}));