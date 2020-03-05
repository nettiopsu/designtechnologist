import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

interface Props {
  data: {
    allMdx: {
      edges: any[];
    };
  };
}

const IndexPage = ({
  data: {
    allMdx: { edges }
  }
}: Props) => {
  return (
    <Layout>
      <SEO title="Club" />
      <h1>Design technologist handbook</h1>
      <h3>Chapters</h3>
      <ul>
        <li>
          <a href="/book/license">License</a>
        </li>
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
