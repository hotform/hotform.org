import React from 'react';

/* Config */
import config from '@config';

/* Emotion */
import {
  Global,
  ThemeProvider
} from '@emotion/react';
import styled from '@emotion/styled';

/* Gatsby */
import { Link } from 'gatsby';

/* Head */
import SiteHead from '@head';

/* Themes */
import {
  getGlobalStyles,
  lightTheme
} from '@themes';

export const Container = styled.main(({ theme }) => ({
  margin: '5%',
  padding: theme.spacing(2),
  background: theme.colors.background,
  a: {
    fontSize: theme.fontSizes(3.5),
    textDecoration: 'underline'
  }
}));

export const Head: React.FC = () => (
  <SiteHead
    description={ config.name }
    title={ `Page Not Found | ${config.name}` }
  />
);

const PageNotFound: React.FC = () => {
  return (
    <ThemeProvider theme={ lightTheme }>
      <Global styles={ getGlobalStyles(lightTheme) }/>
      <Container>
        <h1>Page Not Found</h1>
        <h2>Sorry, we couldn't find what you were looking for</h2>
        <Link to="/">
          Back to home
        </Link>
      </Container>
    </ThemeProvider>
  );
}

export default PageNotFound;