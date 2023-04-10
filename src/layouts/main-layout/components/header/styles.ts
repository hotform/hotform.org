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
  zIndex: 1000,
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

export const NavigationBar = styled.nav(({ theme }) => ({
  display: 'flex',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    borderBottomColor: theme.colors.divider,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1
  }
}));

export const MenuContainer = styled.ul(({ theme }) => ({
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxHeight: `calc(100vh - ${NAVIGATION_BAR_CONTROL_HEIGHT}px - ${theme.spacing(3 * 2)})`,
  width: '100%',
  margin: 0,
  padding: theme.spacing(2, 0),
  gap: theme.spacing(2),
  listStyleType: 'none',
  background: theme.colors.background,
  [theme.breakpoints.down('md')]: {
    maxHeight: `calc(100vh - ${NAVIGATION_BAR_CONTROL_HEIGHT}px)`
  }
}));

export const MenuItem = styled.li(({ theme }) => ({
  width: '100%',
  margin: 0,
  padding: theme.spacing(0, 2),
  fontSize: theme.fontSizes(2.5),
  userSelect: 'none',
  a: {
    color: theme.colors.primary.main
  },
  svg: {
    display: 'flex',
    padding: theme.spacing(0.1),
    boxSizing: 'content-box',
    cursor: 'pointer'
  }
}));

export const MenuItemHeader = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
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
};