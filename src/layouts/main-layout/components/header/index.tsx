import React from 'react';

/* Components */
import HamburgerButton from '@layouts/main-layout/components/hamburger-button';
import Logo from '@components/logo';

/* Config */
import config from '@config';

/* Emotion */
import { useTheme } from '@emotion/react';

/* Shared Types */
import { MainLayoutAllMDXEdge } from '@layouts/main-layout/shared';

/* Styles */
import * as SC from './styles';

/* Themes */
import { useMediaQuery } from '@themes';

export interface MainLayoutHeaderProps{
  edges?: Array<MainLayoutAllMDXEdge>;
}

const Header: React.FC<MainLayoutHeaderProps> = ({ edges = [] }) => {
  const navigationBarWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  const [ collapseNavigationBar, setCollapseNavigationBar ] = React.useState(true);
  const handleCollapseNavigationBar = React.useCallback(() => setCollapseNavigationBar(!collapseNavigationBar), [ collapseNavigationBar ]);
  return (
    <SC.Container>
      <SC.NavigationBarControl>
        <SC.LogoContent to="/">
          <Logo/>
          <span>{ config.name }</span>
        </SC.LogoContent>
        <SC.NavigationBarButton>
          <HamburgerButton
            onClick={ handleCollapseNavigationBar }
            open={ !collapseNavigationBar }
          />
        </SC.NavigationBarButton>
      </SC.NavigationBarControl>
      <SC.NavigationBarContainer
        wrapperSize={ navigationBarWrapperRef.current?.clientHeight }
        collapse={ isDesktop ? false : collapseNavigationBar }
      >
        <SC.NavigationBar ref={ navigationBarWrapperRef }>
          <SC.MenuContainer>
            {
              edges.map((edge, index) => (
                <SC.MenuItem key={ index }>
                  <SC.MenuLink to={ edge.node.fields.slug }>
                    { edge.node.frontmatter.title }
                  </SC.MenuLink>
                </SC.MenuItem>
              ))
            }
            {
              config.socialMedia.map((value, index) => (
                <SC.MenuItem key={ index }>
                  <a
                    className={ SC.MenuLink.toString() }
                    rel="noreferrer"
                    href={ value.to }
                    target="_blank"
                  >
                    { value.label }
                  </a>
                </SC.MenuItem>
              ))
            }
          </SC.MenuContainer>
        </SC.NavigationBar>
      </SC.NavigationBarContainer>
    </SC.Container>
  );
}

export default Header;