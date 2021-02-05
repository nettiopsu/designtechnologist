import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NewsletterPage = () => {
  return (
    <Layout>
      <SEO title="Newsletter" />
      <h1>Newsletter</h1>
      <div>
        Stay tuned! Sign up here to get the latest Design Technologist news
        about coding, development, and everything in-between delivered to your
        inbox. Just enter your details in the form below, and you're all set.
      </div>
    </Layout>
  );
};

export default NewsletterPage;
