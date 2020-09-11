import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Layout from "./layout";
import LayoutChapterStyles from "./layoutChapter.module.css";
import SEO from "./seo";
import { SiteProps } from "../pages";

interface PageTemplateProps {
  data: {
    mdx: {
      frontmatter: any;
      fields: any;
      body: any;
    };
    site: {
      siteMetadata: SiteProps;
    };
  };
  pageContext: any;
}

const getPageData = (page: any) => {
  return page
    ? {
        url: `/${page.fields.slug}`,
        title: page.frontmatter.title
      }
    : null;
};

export default function PageTemplate(props: PageTemplateProps) {
  const { data, pageContext } = props;
  const { mdx, site } = data;
  const previousPage = getPageData(pageContext.previous);
  const nextPage = getPageData(pageContext.next);

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
          <a href="/">{site.siteMetadata.title}</a>
        </Col>
      </Row>

      <MDXRenderer>{mdx.body}</MDXRenderer>

      <Row className={LayoutChapterStyles.readMore}>
        <Col xs={12} md={6}>
          {previousPage && (
            <>
              Previous:
              <div>
                <a href={previousPage.url}>{previousPage.title}</a>
              </div>
            </>
          )}
        </Col>
        <Col xs={12} md={6} className={LayoutChapterStyles.rightCol}>
          {nextPage && (
            <>
              Next:
              <div>
                <a href={nextPage.url}>{nextPage.title}</a>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Layout>
  );
}
export const pageQuery = graphql`
  query BookChapterQuery($id: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
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
