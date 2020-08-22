import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const License = () => {
  return (
    <Layout>
      <SEO title="License" />
      <h1>License</h1>
      <p>
        The text of the handbook may only be distributed subject to the terms
        and conditions set forth in the License
      </p>
      <p>
        <b>Attribution:</b> You must attribute the work in the manner specified
        by the author or licensor.
      </p>
      <p>
        <b>Non-commercial:</b> The licensor permits others to copy, distribute
        and transmit the work. In return, licensees may not use the work for
        commercial purposes — unless they get the licensor's permission.
      </p>{" "}
      <p>
        <b>Share Alike:</b> The licensor permits others to distribute derivative
        works only under the same license or one compatible with the one that
        governs the licensor's work.
      </p>
      <b>
        Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
      </b>
      (http://creativecommons.org/licenses/by-nc-sa/4.0/)
    </Layout>
  );
};

export default License;
