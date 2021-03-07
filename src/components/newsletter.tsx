import addToMailchimp from "gatsby-plugin-mailchimp";
import React, { FormEvent, useRef, useState } from "react";
import { commonButton, commonForm } from "../css/common.module.css";
import {
  newsletterContainer,
  newsletterDot,
  newsletterFieldsContainer,
  newsletterHeader,
  newsletterText
} from "./newsletter.module.css";

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
    <div className={newsletterContainer}>
      <form onSubmit={e => handleSubmit(e)} className={commonForm}>
        <div>
          <div>
            <div>
              <div className={newsletterHeader}>
                <div className={newsletterDot} /> Design Technologist Club
                Newsletter
              </div>
              <div className={newsletterText}>
                Join Design Technologist Club and receive technology news,
                manuals, tips and tricks
              </div>

              <div>
                {!isSuccess && (
                  <div>
                    <div
                      className={
                        "flex items-center " + newsletterFieldsContainer
                      }
                    >
                      <input
                        type="type"
                        id="email-subscription"
                        ref={email}
                        placeholder={"E-mail"}
                        aria-label="E-mail"
                        className="flex-1 appearance-none border rounded mr-3 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <button type="submit" className={commonButton}>
                        Subscribe
                      </button>
                    </div>
                  </div>
                )}
                {message && (
                  <div
                    id="newsletter-alert"
                    className={newsletterText}
                    role="alert"
                  >
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
