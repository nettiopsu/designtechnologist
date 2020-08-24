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
      <SEO title="Handbook" />
      <h1>Design technologist handbook</h1>
      <img src={mainPic} alt=""></img>
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
          <a href="/book/who-is-a-design-technologist">
            Who is a design technologist?
          </a>
        </li>
        <li>
          <a href="/book/challenges">Challenges</a>
        </li>
        <li>
          <a href="/book/skills">Skills</a>
        </li>
        <li>
          <a href="/book/cooperation-with-other-team-members">
            Cooperation with other team members
          </a>
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
