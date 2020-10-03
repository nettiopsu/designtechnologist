import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import mainPic from "../images/designtechnologist.svg";
import IndexStyles from "./index.module.css";

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
      <SEO />
      <h1>{site.siteMetadata.title}</h1>
      <figure className={IndexStyles.hero}>
        <img src={mainPic} alt="" />
      </figure>
      <h2>Chapters</h2>
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
