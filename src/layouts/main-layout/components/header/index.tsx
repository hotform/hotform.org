import React from 'react';

/* Components */
import HamburgerButton from '@layouts/main-layout/components/hamburger-button';
import Logo from '@components/logo';

/* Config */
import config from '@config';

/* Gatsby */
import { useLocation } from '@reach/router';

/* React Icons */
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';

/* Shared */
import { MainLayoutAllMDXParsedEdge } from '@layouts/main-layout/shared';

/* Styles */
import * as SC from './styles';

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
  const [ openHamburgerButton, setOpenHamburgerButton ] = React.useState(false);
  const handleHamburgerButton = React.useCallback(() => setOpenHamburgerButton(!openHamburgerButton), [ openHamburgerButton ]);
  return (
    <SC.Container>
      <SC.NavigationBarControl>
        <SC.LogoContent to="/">
          <Logo/>
          <span>{ config.name }</span>
        </SC.LogoContent>
        <SC.NavigationBarButton>
          <label htmlFor="bmF2aWdhdGlvbi1iYXItYnV0dG9u">
            <HamburgerButton
              onClick={ handleHamburgerButton }
              open={ openHamburgerButton }
              timeout={ 0 }
            />
          </label>
        </SC.NavigationBarButton>
      </SC.NavigationBarControl>
      <input
        hidden
        id="bmF2aWdhdGlvbi1iYXItYnV0dG9u"
        type="checkbox"
      />
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
    </SC.Container>
  );
}

export default Header;