/* Emotion */
import styled from '@emotion/styled';

/* Gatsby */
import { Link } from 'gatsby';

export const NAVIGATION_BAR_CONTROL_HEIGHT = 60;

export const Container = styled.header(({ theme }) => ({
  position: 'sticky',
  top: 0,
  height: '100vh',
  minWidth: 0,
  padding: theme.spacing(3),
  background: theme.colors.background,
  outlineColor: theme.colors.divider,
  outlineStyle: 'solid',
  outlineWidth: 1,
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: 'fit-content',
    width: '100%',
    padding: 0,
    outline: 'none'
  }
}));

export const NavigationBarControl = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: NAVIGATION_BAR_CONTROL_HEIGHT,
  minWidth: 250,
  width: '100%',
  padding: theme.spacing(0, 2),
  gap: theme.spacing(1),
  borderBottomColor: theme.colors.divider,
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  borderTopColor: theme.colors.divider,
  borderTopStyle: 'solid',
  borderTopWidth: 1
}));

export const NavigationBarButton = styled.div(({ theme }) => ({
  display: 'none',
  cursor: 'pointer',
  svg: {
    width: '32px',
    height: 'auto',
    fill: theme.colors.primary.main
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex'
  }
}));

export const LogoContent = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 'max-content',
  gap: theme.spacing(1.6),
  fontSize: theme.fontSizes(6.5),
  color: theme.colors.primary.main,
  ':hover': {
    textDecoration: 'none'
  },
  svg: {
    width: '30px',
    height: 'auto',
    fill: theme.colors.primary.main
  }
}));

export interface NavigationBarContainerProps{
  wrapperSize?: number;
  collapse?: boolean;
}

export const NavigationBarContainer = styled.div<NavigationBarContainerProps>(({
  wrapperSize = 0,
  collapse = false
}) => ({
  overflow: 'hidden',
  height: 0,
  width: '100%',
  opacity: 0,
  transitionDuration: '0.2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease-in-out',
  ...(!collapse && {
    overflow: 'visible',
    height: wrapperSize,
    opacity: 1
  })
}));

export const NavigationBar = styled.nav(() => ({
  display: 'flex',
  width: '100%'
}));

export const MenuContainer = styled.ul(({ theme }) => ({
  overflow: 'auto',
  maxHeight: `calc(100vh - ${NAVIGATION_BAR_CONTROL_HEIGHT}px - ${theme.spacing(3 * 2)})`,
  width: '100%',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  background: theme.colors.background,
  [theme.breakpoints.down('md')]: {
    maxHeight: `calc(100vh - ${NAVIGATION_BAR_CONTROL_HEIGHT}px)`
  }
}));

export const MenuItem = styled.li(({ theme }) => ({
  width: '100%',
  margin: 0,
  padding: theme.spacing(1, 2),
  fontSize: theme.fontSizes(2.5),
  a: {
    color: theme.colors.primary.main
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    borderBottomColor: theme.colors.divider,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1
  }
}));

export const MenuLink = styled(Link)(() => ({
  [[
    '&:hover',
    '&.active'
  ].join()]: {
    textDecoration: 'underline'
  }
}));

MenuLink.defaultProps = {
  activeClassName: 'active'
}