import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { bubble } from "../components/layout.module.css";
import { arrow } from "./newsletter.module.css";

const NewsletterPage = () => {
  return (
    <Layout>
      <SEO title="Newsletter" />
      <h1>Newsletter</h1>
      <div className={bubble}>
        Stay tuned! Sign up here to get the latest Design Technologist news
        about coding, development, and everything in-between delivered to your
        inbox. Just enter your details in the form below, and you're all set.
        <div aria-hidden="true" className={arrow}>
          ⬇️
        </div>
      </div>
    </Layout>
  );
};

export default NewsletterPage;
