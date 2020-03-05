import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import mainPic from "../images/designtechnologist.svg";

interface Props {
  data: {
    allMdx: {
      edges: any[];
    };
  };
}

const IndexPage = ({
  data: {
    allMdx: { edges }
  }
}: Props) => {
  return (
    <Layout>
      <SEO title="Club" />
      <h1>Design technologist handbook</h1>
      <img src={mainPic}></img>
      <h3>Chapters</h3>
      <ul>
        <li>
          <a href="/book/searching-for-yourself">Searching for yourself</a>
        </li>
        <li>
          <a href="/book/generalists-specialists-hybrid-t-shaped-people">
            Generalists, specialists, hybrid and T-shaped people
          </a>
        </li>
        <li>
          <a href="/book/license">License</a>
        </li>
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
