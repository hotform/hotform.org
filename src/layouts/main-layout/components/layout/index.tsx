import React from 'react';

/* Components */
import Footer, { MainLayoutFooterProps } from '@layouts/main-layout/components/footer';
import Header, { MainLayoutHeaderProps } from '@layouts/main-layout/components/header';

/* Emotion */
import {
  Global,
  ThemeProvider
} from '@emotion/react';

/* Styles */
import * as SC from './styles';

/* Themes */
import {
  getGlobalStyles,
  lightTheme
} from '@themes';

export type MainLayoutProps = React.PropsWithChildren & MainLayoutFooterProps & MainLayoutHeaderProps;

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  currentEdge,
  edges = []
}) => {
  return (
    <ThemeProvider theme={ lightTheme }>
      <Global styles={ getGlobalStyles(lightTheme) }/>
      <SC.Container>
        <Header edges={ edges }/>
        <SC.ContentContainer>
          <SC.Content>
            { children }
          </SC.Content>
          <Footer currentEdge={ currentEdge }/>
        </SC.ContentContainer>
      </SC.Container>
    </ThemeProvider>
  );
}

export default MainLayout;