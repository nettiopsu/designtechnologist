import { graphql } from "gatsby";
import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Layout from "../components/layout";
import SEO from "../components/seo";
import mainPic from "../images/designtechnologist.svg";
import { indexHero, indexTitle } from "./index.module.css";
import { bubble } from "../components/layout.module.css";

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
      <Row middle={"xs"}>
        <Col xs={12} lg={6}>
          <figure className={indexHero}>
            <img src={mainPic} alt="" />
          </figure>
        </Col>
        <Col xs={12} lg={6}>
          <div className={bubble}>
            <h2>Not a pure developer, but neither a designer</h2>
            <p>
              <b>You exist in a gray zone.</b> You know how to develop, you have
              an eye for UX and design, technology is just a tool for you to
              satisfy user needs...
            </p>
            <p>
              Sounds familiar? <b>You might be a Design Technologist.</b>
            </p>
            <p>
              Join our club of like-minded people in <a href="/slack">Slack</a>{" "}
              and check the <a href="/book">handbook</a>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <div className={bubble}>
            <h2>Slack community</h2>
            <p>
              The Design Technologist Slack community is a free space for
              everyone who work in or have an interest in everything between
              design and coding. It is the place to go meet like-minded people,
              share information, find out what is going on going on.
            </p>
            <p>
              <a href="https://join.slack.com/t/designtechnologists/shared_invite/enQtOTU2MTc4OTE5NDI3LTUzYzZhM2Y0NDEwODgzZWNjNTAxYzVjM2EyNTI4ODIyYjFmZTg1YTRmOTdiNmQ0MDNkZGFhMTFiOGUxNDc5NmM">
                Join our Slack community
              </a>
            </p>
            <h2>Newsletter</h2>
            <p>
              Stay tuned! Sign up here to get the latest Design Technologist
              news about coding, development, and everything in-between
              delivered to your inbox. Just enter your details in the form
              below, and you're all set.
            </p>
            <p>
              <a href="/newsletter">Subscribe to the newsletter</a>
            </p>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div className={bubble}>
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
