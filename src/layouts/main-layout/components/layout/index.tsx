import React from 'react';

/* Components */
import Footer, { MainLayoutFooterProps } from '@layouts/main-layout/components/footer';
import Header from '@layouts/main-layout/components/header';

/* Emotion */
import {
  Global,
  ThemeProvider
} from '@emotion/react';

/* Shared */
import {
  parseEdges,
  MainLayoutAllMDXEdge
} from '@layouts/main-layout/shared';

/* Styles */
import * as SC from './styles';

/* Themes */
import {
  getGlobalStyles,
  lightTheme
} from '@themes';

export interface MainLayoutProps extends React.PropsWithChildren, MainLayoutFooterProps{
  edges: Array<MainLayoutAllMDXEdge>;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  currentEdge,
  edges = []
}) => {
  return (
    <ThemeProvider theme={ lightTheme }>
      <Global styles={ getGlobalStyles(lightTheme) }/>
      <SC.Container>
        <Header edges={ parseEdges(edges) }/>
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