const path = require('path');

/* Dependencies */
const { createFilePath } = require('gatsby-source-filesystem');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

exports.createPages = async ({
  actions,
  graphql
}) => {
  const MDXresult = await graphql(`
    query{
      allMdx{
        nodes{
          id
          fields{
            slug
          }
          internal{
            contentFilePath
          }
        }
      }
    }
  `);
  
  if(MDXresult.errors){
    console.error(MDXresult.errors);
    throw Error(MDXresult.errors);
  }
  
  /* MDX Templates */
  const documentationTemplate = path.resolve(__dirname, 'src', 'templates', 'documentation', 'index.tsx');
  MDXresult.data.allMdx.nodes.forEach(node => {
    actions.createPage({
      component: `${documentationTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id
      },
      path: node.fields.slug
    });
  });
}

exports.onCreateNode = ({
  actions,
  getNode,
  node
}) => {
  if(node.internal.type === 'Mdx'){
    const name = 'slug';
    actions.createNodeField({
      name,
      node,
      value: createFilePath({
        node,
        getNode
      })
    });
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [
        new TsconfigPathsWebpackPlugin()
      ]
    }
  });
}