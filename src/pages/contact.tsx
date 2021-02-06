import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./contact.css";
import ContactStyles from "./contact.module.css";
import CommonStyles from "../css/common.module.css";
import Signature from "../components/signature";

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contacts" />
      <h1>Contacts</h1>
      <div className={ContactStyles.intro}>
        Feel free to contact me on any matters related to the Design
        Technologist Handbook and Design Technologist world in general. Any
        comments are welcome!
      </div>
      <div className={ContactStyles.intro}>
        <Signature />
      </div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={CommonStyles.form}
      >
        <input type="hidden" name="bot-field" />{" "}
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="E-mail"
            name="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-64"
            id="message"
            placeholder="Your message"
            name="message"
          />
        </div>
        <div className="mb-6">
          <div data-netlify-recaptcha="true"></div>
        </div>
        <div className="flex items-center justify-end">
          <button className={CommonStyles.button} type="submit">
            Send
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default ContactPage;
