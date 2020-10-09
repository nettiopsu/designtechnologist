import React, { FormEvent, useRef, useState } from "react";
import NewsletterStyles from "./newsletter.module.css";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Newsletter = () => {
  const email = useRef<HTMLInputElement | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentEmail = email.current ? email.current.value : null;
    if (currentEmail) {
      const { result, msg } = await addToMailchimp(currentEmail, {
        URL: window.location.pathname
      });
      if (result === "success") {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
      setMessage(msg);
    }

    return null;
  };

  return (
    <div className={NewsletterStyles.container}>
      <form onSubmit={e => handleSubmit(e)}>
        <div className={NewsletterStyles.header}>
          Design Technologist Club Newsletter
        </div>
        <div className={NewsletterStyles.text}>
          Join Design Technologist Club and receive technology news, manuals,
          tips and tricks
        </div>
        {!isSuccess && (
          <div className={NewsletterStyles.text}>
            <div className="flex items-center">
              <input
                type="type"
                id="email-subscription"
                ref={email}
                placeholder={"E-mail"}
                aria-label="E-mail"
                className="w-full appearance-none border rounded w-full mr-3 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className={
                  "hover:bg-blue-700 text-white font-bold py-1 px-6 rounded " +
                  NewsletterStyles.button
                }
              >
                Subscribe
              </button>
            </div>
          </div>
        )}
        <div id="woop" className={NewsletterStyles.text} role="alert">
          {message}
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
