import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

interface Props {
  data: {
    allMarkdownRemark: {
      edges: any[];
    };
  };
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}: Props) => {
  const Posts = edges.map(edge => (
    <div key={edge.node.id}>
      <a href={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</a>
    </div>
  ));

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Chapters</h1>
      {Posts}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
