import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import mainPic from "../images/book.svg";
import { bookHero } from "./book.module.css";

interface Edge {
  node: {
    frontmatter: {
      title?: string;
      order: number;
      appendix?: boolean;
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

const BookPage = ({
  data: {
    allMdx: { edges }
  }
}: Props) => {
  return (
    <Layout>
      <SEO title="Handbook" />
      <figure className={bookHero}>
        <img src={mainPic} alt="" />
      </figure>
      <h1>Design Technologist Handbook</h1>
      <ol>
        {edges.map(edge => {
          return (
            <li key={"article-" + edge.node.fields.slug}>
              <a href={"/" + edge.node.fields.slug}>
                {edge.node.frontmatter.title}
              </a>
              {edge.node.frontmatter.appendix && " (Appendix)"}
            </li>
          );
        })}
      </ol>
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
            appendix
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BookPage;
