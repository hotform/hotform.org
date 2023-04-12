import React from 'react';

/* Components */
import {
  CodeBlock,
  CodeEditor
} from '@components/sandpack';

/* Config */
import config from '@config';

/* Gatsby */
import {
  graphql,
  HeadProps,
  Link as GatsbyLink,
  PageProps,
  StaticQueryDocument
} from 'gatsby';

/* Head */
import SiteHead from '@head';

/* Layout */
import Layout, {
  MainLayoutAllMDXEdge,
  MainLayoutAllMDXNode,
  MainLayoutAllMDXNodeFrontmatter
} from '@layouts/main-layout';

/* MDX */
import { MDXProvider } from '@mdx-js/react';

export interface DocumentationAllMDX{
  edges: Array<MainLayoutAllMDXEdge>;
}

export interface DocumentationMDXFrontmatter extends MainLayoutAllMDXNodeFrontmatter{
  description: string;
  keywords: Array<string>;
}

export interface DocumentationMDX extends MainLayoutAllMDXNode{
  frontmatter: DocumentationMDXFrontmatter;
}

export interface DocumentationSiteMetadata{
  ogImageSource: string;
  siteUrl: string;
}

export interface DocumentationDataSite{
  siteMetadata: DocumentationSiteMetadata;
}

export interface DocumentationData{
  allMdx: DocumentationAllMDX;
  mdx: DocumentationMDX;
  site: DocumentationDataSite;
}

export const Head: React.FC<HeadProps<DocumentationData>> = ({ data }) => (
  <SiteHead
    canonicalURL={ `${data.site.siteMetadata.siteUrl}${data.mdx.fields.slug}` }
    description={ data.mdx.frontmatter.description }
    keywords={ data.mdx.frontmatter.keywords }
    ogImageSource={ data.site.siteMetadata.ogImageSource }
    title={ `${data.mdx.frontmatter.title} | ${config.name}` }
  />
);

const DocumentationTemplate: React.FC<PageProps<DocumentationData>> = ({
  children,
  data
}) => {
  return (
    <Layout
      currentEdge={ data.allMdx.edges.find(e => e.node.fields.slug === data.mdx.fields.slug) }
      edges={ data.allMdx.edges }
    >
      <MDXProvider components={ {
        GatsbyLink,
        CodeBlock,
        CodeEditor
      } }>
        { children }
      </MDXProvider>
    </Layout>
  );
}

export const query: StaticQueryDocument = graphql`
  fragment MainLayoutAllMDXNode on Mdx{
    fields{
      slug
    }
    frontmatter{
      title
    }
  }
  query($id: String){
    allMdx(sort: {
      fields: {
        slug: ASC
      }
    }){
      edges{
        node{
          ...MainLayoutAllMDXNode
        }
        next{
          ...MainLayoutAllMDXNode
        }
        previous{
          ...MainLayoutAllMDXNode
        }
      }
    }
    mdx(id: { eq: $id }){
      ...MainLayoutAllMDXNode
      frontmatter{
        description
        keywords
      }
    }
    site{
      siteMetadata{
        ogImageSource
        siteUrl
      }
    }
  }
`;

export default DocumentationTemplate;