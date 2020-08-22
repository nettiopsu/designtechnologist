import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./contact.css";
import ContactStyles from "./contact.module.css";

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact us" />
      <h1>Contact us</h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
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
          <button
            className={
              "text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " +
              ContactStyles.button
            }
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default ContactPage;
