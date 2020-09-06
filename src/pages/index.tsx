import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import mainPic from "../images/designtechnologist.svg";

interface Edge {
  node: {
    frontmatter: {
      title: string;
      order: number;
    };
    fields: {
      slug: string;
    };
  };
}

interface Props {
  data: {
    allMdx: {
      edges: Edge[];
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
      <SEO title="Handbook" />
      <h1>Design technologist handbook</h1>
      <img src={mainPic} alt=""></img>
      <h3>Chapters</h3>
      <ul>
        {edges.map(edge => {
          return (
            <li>
              <a href={edge.node.fields.slug}>{edge.node.frontmatter.title}</a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          frontmatter {
            title
            order
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
