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

export interface SiteProps {
  description?: string;
  lang?: string;
  meta: [];
  title?: string;
}

interface Props {
  data: {
    allMdx: {
      edges: Edge[];
    };
    site: {
      siteMetadata: SiteProps;
    };
  };
}

const IndexPage = ({
  data: {
    allMdx: { edges },
    site
  }
}: Props) => {
  return (
    <Layout>
      <SEO title="Handbook" />
      <h1>{site.siteMetadata.title}</h1>
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
    site {
      siteMetadata {
        title
        description
      }
    }
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
