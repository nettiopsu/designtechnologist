import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { useState } from "react";
import { Col, Row } from "react-flexbox-grid";
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
import { commonForm, commonButton } from "../css/common.module.css";
import { SiteProps } from "../pages";
import Layout from "./layout";
import {
  layoutChapterComment,
  layoutChapterCommentContainer,
  layoutChapterCommentName,
  layoutChapterCommentsContainer,
  layoutChapterHero,
  layoutChapterHoneyPot,
  layoutChapterReadMore,
  layoutChapterShareButtonContainer,
  layoutChapterSmallText,
  layoutChapterSubheader
} from "./layoutChapter.module.css";
import RefLink from "./reflink";
import SEO from "./seo";

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
    allYaml: {
      edges: {
        node: {
          name: string;
          message: string;
          date: number;
        };
      }[];
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
  const { mdx, site, allYaml } = data;
  const previousPage = getPageData(pageContext.previous);
  const nextPage = getPageData(pageContext.next);
  const location = typeof window === "object" ? window.location.href : "";
  const [commentSubmitResultMessage, setCommentSubmitResultMessage] = useState<
    string
  >();
  const [commentSubmitIsBlocked, setCommentSubmitIsBlocked] = useState(false);
  const [commentWasSent, setCommentWasSent] = useState(false);

  const comments = allYaml.edges.length
    ? allYaml.edges
    : [
        ...allYaml.edges,
        {
          node: {
            name: "Design Technologist Club",
            message: "You can be first to leave the comment! :)",
            date: new Date().getTime() / 1000
          }
        }
      ];

  const onCommentSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCommentSubmitResultMessage("Sending data, wait a second...");
    setCommentSubmitIsBlocked(true);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const dataParams = new URLSearchParams();
    formData.forEach((value, key) => {
      dataParams.append(key, value.toString());
    });

    const submitResult = await fetch(form.action, {
      method: "POST",
      body: dataParams,
      redirect: "manual"
    });

    if (submitResult.type === "opaqueredirect") {
      setCommentSubmitResultMessage(
        "Thanks, your message was sent. It will appear after moderation"
      );
      setCommentWasSent(true);
    } else {
      setCommentSubmitIsBlocked(false);
      const submitJsonResult = await submitResult.json();
      if (submitJsonResult.errorCode === "MISSING_REQUIRED_FIELDS") {
        const missingFields = submitJsonResult.data.join(", ");
        setCommentSubmitResultMessage(
          "Error. Missing fields: " + missingFields
        );
      } else {
        if (submitJsonResult.error && submitJsonResult.error.text) {
          setCommentSubmitResultMessage(submitJsonResult.error.text);
        } else {
          setCommentSubmitResultMessage(
            "Unfortunately you can not send a message at the moment. We will fix it"
          );
        }
      }
    }
  };

  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        mainTitle="Design Technologist Handbook"
      />
      <article>
        <figure
          className={layoutChapterHero}
          style={{
            paddingTop: mdx.frontmatter.aspectRatio
              ? mdx.frontmatter.aspectRatio * 100 + "%"
              : undefined
          }}
        >
          <img src={mdx.frontmatter.image.publicURL} alt="" />
        </figure>
        <h1>{mdx.frontmatter.title}</h1>

        <Row className={layoutChapterReadMore}>
          <Col xs={12} md={6}>
            Reading time: {Math.round(mdx.fields.readingTime.minutes)} min.
          </Col>
          <Col xs={12} md={6}>
            <a href="/book">Design Technologist Handbook</a>
          </Col>
        </Row>
        <MDXRenderer>{mdx.body}</MDXRenderer>

        <aside>
          <Row className={layoutChapterReadMore}>
            {previousPage && (
              <Col xs={12} md={nextPage ? 6 : 12}>
                <>
                  <div className={layoutChapterSubheader}>
                    Previous article:
                  </div>
                  <div>
                    <a href={previousPage.url}>{previousPage.title}</a>
                  </div>
                </>
              </Col>
            )}
            {nextPage && (
              <Col xs={12} md={previousPage ? 6 : 12}>
                <>
                  <div className={layoutChapterSubheader}>Next article:</div>
                  <div>
                    <a href={nextPage.url}>{nextPage.title}</a>
                  </div>
                </>
              </Col>
            )}
          </Row>

          <div className={layoutChapterShareButtonContainer}>
            <div className={layoutChapterSubheader}>Share in social media:</div>
            <TwitterShareButton url={location}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={location}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton url={location}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <RedditShareButton url={location}>
              <RedditIcon size={32} round={true} />
            </RedditShareButton>
            <TelegramShareButton url={location}>
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
            <WhatsappShareButton url={location}>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <EmailShareButton url={location}>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </div>

          <div className={layoutChapterCommentsContainer}>
            <form
              method="POST"
              className={commonForm}
              action={site.siteMetadata.commentsApiUrl}
              onSubmit={event => onCommentSubmit(event)}
            >
              <div className={layoutChapterCommentContainer}>
                <div className={layoutChapterSubheader}>Comments:</div>

                {comments.map((comment, offset) => {
                  const date = new Date(comment.node.date * 1000);
                  return (
                    <div
                      className={layoutChapterComment}
                      key={"comment-" + offset}
                    >
                      <div className={layoutChapterCommentName}>
                        <b>{comment.node.name}</b> ({date.toLocaleDateString()}{" "}
                        {date.toLocaleTimeString()})
                      </div>
                      {comment.node.message}
                    </div>
                  );
                })}
              </div>
              {!commentWasSent && (
                <div>
                  <div className="mb-4">
                    <input
                      name="options[redirect]"
                      type="hidden"
                      value={location}
                    />
                    <input
                      name="fields[slug]"
                      type="hidden"
                      value={pageContext.currentSlug}
                    />
                    <label
                      htmlFor="comment-field-name"
                      className="block font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      name="fields[name]"
                      type="text"
                      id="comment-field-name"
                      className="flex-1 appearance-none border rounded mr-3 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-bold mb-2">Message</label>
                    <textarea
                      name="fields[message]"
                      id="comment-field-name"
                      className="rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline h-16"
                    ></textarea>
                  </div>
                </div>
              )}
              <div aria-hidden={true} className={layoutChapterHoneyPot}>
                <input
                  name="fields[bee-attraction]"
                  type="text"
                  id="comment-field-name"
                />
              </div>
              <div className={layoutChapterSmallText + " mb-4"}>
                Comments are moderated and appear as soon as they have been
                approved
              </div>
              {commentSubmitResultMessage && (
                <div role="alert" className={layoutChapterSmallText + " mb-4"}>
                  {commentSubmitResultMessage}
                </div>
              )}

              {!commentWasSent && (
                <button
                  type="submit"
                  className={commonButton}
                  disabled={commentSubmitIsBlocked}
                >
                  Send
                </button>
              )}
            </form>
          </div>

          {mdx.frontmatter.references && (
            <div className={layoutChapterSmallText}>
              <div id="references" className={layoutChapterSubheader}>
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
        </aside>
      </article>
    </Layout>
  );
}
export const pageQuery = graphql`
  query BookChapterQuery($id: String, $currentSlug: String) {
    site {
      siteMetadata {
        title
        description
        commentsApiUrl
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
    allYaml(filter: { slug: { eq: $currentSlug } }) {
      edges {
        node {
          id
          date
          name
          message
        }
      }
    }
  }
`;
