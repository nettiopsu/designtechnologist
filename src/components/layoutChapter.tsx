import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Layout from "./layout";
import LayoutChapterStyles from "./layoutChapter.module.css";
import SEO from "./seo";

interface PageTemplateProps {
  data: {
    mdx: {
      frontmatter: any;
      fields: any;
      body: any;
    };
  };
}

export default function PageTemplate(props: PageTemplateProps) {
  const { data } = props;
  const { mdx } = data;

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <img src={mdx.frontmatter.image.publicURL} alt="" />
      <h1>{mdx.frontmatter.title}</h1>

      <Row className={LayoutChapterStyles.readMore}>
        <Col xs={12} md={6}>
          Reading time: {Math.round(mdx.fields.readingTime.minutes)} min.
        </Col>
        <Col xs={12} md={6} className={LayoutChapterStyles.rightCol}>
          <a href="/">Design Technologist Handbook</a>
        </Col>
      </Row>

      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
}
export const pageQuery = graphql`
  query BookChapterQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        image {
          publicURL
        }
      }
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`;
