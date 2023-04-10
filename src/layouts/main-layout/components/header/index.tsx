import React from 'react';

/* Components */
import HamburgerButton from '@layouts/main-layout/components/hamburger-button';
import Logo from '@components/logo';

/* Config */
import config from '@config';

/* Emotion */
import { useTheme } from '@emotion/react';

/* Gatsby */
import { useLocation } from '@reach/router';

/* React Icons */
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';

/* Shared */
import { MainLayoutAllMDXParsedEdge } from '@layouts/main-layout/shared';

/* Styles */
import * as SC from './styles';

/* Themes */
import { useMediaQuery } from '@themes';

export interface MainLayoutHeaderMenuItemProps{
  edge: MainLayoutAllMDXParsedEdge;
}

export interface MainLayoutHeaderProps{
  edges: Array<MainLayoutAllMDXParsedEdge>;
}

const MenuItem: React.FC<MainLayoutHeaderMenuItemProps> = ({ edge }) => {
  const location = useLocation();
  
  const isActiveLink = React.useCallback((target: MainLayoutAllMDXParsedEdge) => (
    (target.node.fields.slug.toString() === location.pathname.toString())
      || target.children.some(isActiveLink)
  ), []);
  
  const [ isExpanded, setIsExpanded ] = React.useState(isActiveLink(edge));
  
  const expand = React.useCallback(() => setIsExpanded(!isExpanded), [ isExpanded ]);
  
  const isRecursive = !!edge.children.length;
  
  return (
    <SC.MenuItem>
      <SC.MenuItemHeader>
        <SC.MenuLink to={ edge.node.fields.slug }>
          { edge.node.frontmatter.title }
        </SC.MenuLink>
        {
          isRecursive && (
            <div onClick={ expand }>
              {
                isExpanded ? <IoIosArrowUp/> : <IoIosArrowDown/>
              }
            </div>
          )
        }
      </SC.MenuItemHeader>
      {
        (isRecursive && isExpanded) && (
          <SC.MenuContainer css={ { paddingBottom: 0 } }>
            {
              edge.children.map((child, index) => (
                <MenuItem
                  edge={ child }
                  key={ index }
                />
              ))
            }
          </SC.MenuContainer>
        )
      }
    </SC.MenuItem>
  );
}

const Header: React.FC<MainLayoutHeaderProps> = ({ edges }) => {
  const { breakpoints } = useTheme();
  
  const isDesktop = useMediaQuery({ query: breakpoints.up('md') });
  
  const [ navigationBarIsExpanded, setNavigationBarIsExpanded ] = React.useState(false);
  
  const handleNavigationBarIsExpanded = React.useCallback(() => setNavigationBarIsExpanded(!navigationBarIsExpanded), [ navigationBarIsExpanded ]);
  
  return (
    <SC.Container>
      <SC.NavigationBarControl>
        <SC.LogoContent to="/">
          <Logo/>
          <span>{ config.name }</span>
        </SC.LogoContent>
        <SC.NavigationBarButton>
          <HamburgerButton
            onClick={ handleNavigationBarIsExpanded }
            open={ navigationBarIsExpanded }
            timeout={ 0 }
          />
        </SC.NavigationBarButton>
      </SC.NavigationBarControl>
      {
        (isDesktop || navigationBarIsExpanded) && (
          <SC.NavigationBar>
            <SC.MenuContainer>
              {
                edges.map((edge, index) => (
                  <MenuItem
                    edge={ edge }
                    key={ index }
                  />
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
        )
      }
    </SC.Container>
  );
}

export default Header;