import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
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

      <div className={LayoutChapterStyles.upperContainer}>
        <div className={LayoutChapterStyles.rightCol}>
          <a href="/">Back</a>
        </div>
      </div>

      <img src={mdx.frontmatter.image.publicURL} alt="" />

      <h1>{mdx.frontmatter.title}</h1>

      <div className={LayoutChapterStyles.readMore}>
        Reading time: {Math.round(mdx.fields.readingTime.minutes)} min.
      </div>

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
