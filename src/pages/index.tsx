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
        <Col xs={12} lg={4}>
          <div className={indexLeft}>
            <p>
              <b>Not a pure developer, but neither a designer.</b>
            </p>
            <p>
              <b>You exist in a gray zone.</b> You know how to develop, you have
              an eye on UX and design, technology is just a tool for you to
              satisfy user needs...
            </p>
            <p>
              Sounds familiar? <b>Then you might be a Design Technologist.</b>
            </p>
            <p>
              <b>I know how it feels</b>. Design Technologist, UX Developer,
              Creative Technologist... <b>It has many names</b>, and{" "}
              <b>I battled for many years</b> to understand who I am -
              throughout my job in different companies and studying in
              universities. <b>I could give up...</b>
            </p>
            <p>
              <b>But I did not.</b> Instead, I researched and collected data
              from various sources and <b>wrote a handbook</b> that you can read
              here. I felt that I need to help others, who struggle with the
              same questions: who they are, how their job title should be
              called, and how to find your dream job. My aim is also to increase
              the awareness of employers about{" "}
              <b>how Design Technologists can be useful</b>.
            </p>
            <p>
              And do not forget to <b>join our club</b> of Design Technologists
              in Slack!
            </p>
            <Signature />
          </div>
        </Col>
        <Col xs={12} lg={8}>
          <div className={indexRight}>
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
