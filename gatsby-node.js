const path = require(`path`);
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const markdownTemplate = path.resolve(`src/templates/markdownTemplate.tsx`);
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: markdownTemplate,
      context: {} // additional data can be passed via context
    });
  });
};
