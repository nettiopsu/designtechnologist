import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { slackLinkContainer } from "./slack.module.css";

const SlackCommunity = () => {
  return (
    <Layout>
      <SEO title="Slack community" />
      <h1>Slack Community</h1>
      <div>
        <p>
          The Design Technologist Slack community is a free space for everyone
          who work in or have an interest in everything between design and
          coding. It is the place to go meet like-minded people, share
          information, find out what is going on going on.
        </p>
        <p className={slackLinkContainer}>
          <a href="https://join.slack.com/t/designtechnologists/shared_invite/enQtOTU2MTc4OTE5NDI3LTUzYzZhM2Y0NDEwODgzZWNjNTAxYzVjM2EyNTI4ODIyYjFmZTg1YTRmOTdiNmQ0MDNkZGFhMTFiOGUxNDc5NmM">
            Join our Slack community
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default SlackCommunity;
