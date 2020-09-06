const { createFilePath } = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with the prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: "book" + value
    });
  }
};

const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              order
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const chapters = result.data.allMdx.edges;

  chapters.sort((a, b) => {
    return a.node.frontmatter.order - b.node.frontmatter.order;
  });

  chapters.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve("./src/components/layoutChapter.tsx"),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        previous: index === 0 ? null : chapters[index - 1].node,
        next: index === chapters.length - 1 ? null : chapters[index + 1].node
      }
    });
  });
};
