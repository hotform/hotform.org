import React from 'react';

/* Config */
import config from '@config';

/* Themes */
import {
  typography,
  ThemeFont
} from '@themes';

export interface SiteHeadProps extends React.PropsWithChildren{
  canonicalURL?: string;
  description: string;
  keywords?: Array<string>;
  ogImageSource?: string;
  title: string;
}

const SiteHead: React.FC<SiteHeadProps> = ({
  canonicalURL,
  children,
  description,
  keywords = [],
  ogImageSource,
  title
}) => {
  return (
    <React.Fragment>
      <title>{ title }</title>
      <meta name="description" content={ description }/>
      <meta name="google" content="notranslate"/>
      
      {/* Canonical URL */}
      {
        !!canonicalURL?.length && (
          <React.Fragment>
            <link rel="canonical" href={ canonicalURL }/>
            <meta property="og:url" content={ canonicalURL }/>
          </React.Fragment>
        )
      }
      
      { /* Keywords */
        !!keywords.length && (
          <meta name="keywords" content={ keywords.join() }/>
        )
      }
      
      {/* Open Graph */}
      <meta name="og:description"  content={ description }/>
      <meta property="og:site_name" content={ config.name }/>
      <meta property="og:title" content={ title }/>
      <meta property="og:type" content="website"/>
      {
        !!ogImageSource?.length && (
          <meta property="og:image" content={ ogImageSource }/>
        )
      }
      
      {/* Fonts */}
      {
        Object.entries<ThemeFont>(typography).map(([ , value ]) => value.sources).flat().map((source, index) => (
          <link
            key={ index }
            href={ source.location }
            rel="preload"
            as="font"
            crossOrigin=""
          />
        ))
      }
      
      { children }
    </React.Fragment>
  );
}

export default SiteHead;