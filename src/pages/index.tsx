import { graphql } from "gatsby";
import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Signature from "../components/signature";
import mainPic from "../images/designtechnologist.svg";
import {
  indexHero,
  indexLeft,
  indexRight,
  indexTitle
} from "./index.module.css";

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

export interface SiteProps {
  description?: string;
  lang?: string;
  meta: [];
  title?: string;
  mainTitle?: string;
  commentsApiUrl?: string;
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
    allMdx: { edges }
  }
}: Props) => {
  return (
    <Layout wide={true}>
      <SEO />
      <h1 className={indexTitle}>Design Technologist Club</h1>
      <Row>
        <Col xs={12} lg={8}>
          <div className={indexLeft}>
            <figure className={indexHero}>
              <img src={mainPic} alt="" />
            </figure>
            <h2>Handbook</h2>
            <ol>
              {edges.map(edge => {
                return (
                  <li key={"article-" + edge.node.fields.slug}>
                    <a href={edge.node.fields.slug}>
                      {edge.node.frontmatter.title}
                    </a>
                    {edge.node.frontmatter.appendix && " (Appendix)"}
                  </li>
                );
              })}
            </ol>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className={indexRight}>
            <p>
              <b>Not a pure developer, but neither a designer.</b>
            </p>
            <p>
              <b>You exist in a gray zone.</b> You know how to develop, you have
              an eye for UX and design, technology is just a tool for you to
              satisfy user needs...
            </p>
            <p>
              Sounds familiar? <b>You might be a Design Technologist.</b>
            </p>
            <p>Join our club of like-minded people and check the handbook:</p>
            <ul>
              <li>
                <a href="/book">Design Technologist Handbook</a>
              </li>
              <li>
                <a href="/slack">Join the Slack community</a>
              </li>
              <li>
                <a href="/newsletter">Subscribe to the newsletter</a>
              </li>
              <li>
                <a href="/about">About the author</a>
              </li>
            </ul>
            <Signature />
          </div>
        </Col>
      </Row>
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

export default IndexPage;
