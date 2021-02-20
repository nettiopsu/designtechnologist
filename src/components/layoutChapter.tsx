import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Layout from "./layout";
import LayoutChapterStyles from "./layoutChapter.module.css";
import CommonStyles from "../css/common.module.css";
import SEO from "./seo";
import { SiteProps } from "../pages";
import RefLink from "./reflink";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";

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
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        mainTitle="Design Technologist Handbook"
      />
      <figure
        className={LayoutChapterStyles.hero}
        style={{
          paddingTop: mdx.frontmatter.aspectRatio
            ? mdx.frontmatter.aspectRatio * 100 + "%"
            : undefined
        }}
      >
        <img src={mdx.frontmatter.image.publicURL} alt="" />
      </figure>
      <h1>{mdx.frontmatter.title}</h1>

      <Row className={LayoutChapterStyles.readMore}>
        <Col xs={12} md={6}>
          Reading time: {Math.round(mdx.fields.readingTime.minutes)} min.
        </Col>
        <Col xs={12} md={6} className={LayoutChapterStyles.rightCol}>
          <a href="/book">Design Technologist Handbook</a>
        </Col>
      </Row>
      <MDXRenderer>{mdx.body}</MDXRenderer>

      <Row className={LayoutChapterStyles.readMore}>
        {previousPage && (
          <Col xs={12} md={nextPage ? 6 : 12}>
            <>
              Previous article:
              <div>
                <a href={previousPage.url}>{previousPage.title}</a>
              </div>
            </>
          </Col>
        )}
        {nextPage && (
          <Col
            xs={12}
            md={previousPage ? 6 : 12}
            className={LayoutChapterStyles.rightCol}
          >
            <>
              Next article:
              <div>
                <a href={nextPage.url}>{nextPage.title}</a>
              </div>
            </>
          </Col>
        )}
      </Row>

      <div className={LayoutChapterStyles.shareButtonContainer}>
        <div className={LayoutChapterStyles.shareButtonContainerHeader}>
          Share in social media:
        </div>
        <TwitterShareButton url={window.location.href}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton url={window.location.href}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <LinkedinShareButton url={window.location.href}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <RedditShareButton url={window.location.href}>
          <RedditIcon size={32} round={true} />
        </RedditShareButton>
        <TelegramShareButton url={window.location.href}>
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
        <WhatsappShareButton url={window.location.href}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <EmailShareButton url={window.location.href}>
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
      </div>

      {mdx.frontmatter.references && (
        <div className={LayoutChapterStyles.references}>
          <div id="references" className={LayoutChapterStyles.referenceTitle}>
            References:
          </div>
          <ol>
            {mdx.frontmatter.references.map((reference: any) => {
              return (
                <li key={"reflink-" + reference.href}>
                  <RefLink href={reference.href}>{reference.text}</RefLink>
                </li>
              );
            })}
          </ol>
        </div>
      )}
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
        aspectRatio
        description
        references {
          text
          href
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
