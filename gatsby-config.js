const path = require('path');

/* Dependencies */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const rehypeMetaAsAttributes = () => async tree => {
  const { visit } = await import('unist-util-visit');
  return visit(tree, 'element', node => {
    if(node.tagName === 'code' && node.data && node.data.meta){
      node.properties.meta = node.data.meta;
    }
  });
}

const wrapESMPlugin = name => options => async (...args) => {
  const mod = await import(name);
  const plugin = mod.default(options);
  return plugin(...args);
}

module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_ID
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: process.env.GATSBY_APP_NAME,
        short_name: process.env.GATSBY_APP_NAME,
        crossOrigin: 'use-credentials',
        icon: path.resolve(__dirname, 'static', 'images', 'logo', '400x400.png')
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-images'
        ],
        mdxOptions: {
          rehypePlugins: [
            rehypeMetaAsAttributes,
            [
              wrapESMPlugin('rehype-slug-custom-id'),
              {
                enableCustomId: true,
                removeAccents: true
              }
            ]
          ]
        }
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.resolve(__dirname, 'content')
      }
    }
  ].filter(Boolean),
  siteMetadata: {
    ogImageSource: `${process.env.GATSBY_URL_ROOT}/images/og-image.png`,
    siteUrl: process.env.GATSBY_URL_ROOT
  }
};