import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import Logo from "../images/logo.svg";
import GithubLogo from "../icons/logo-github.svg";
import SlackLogo from "../icons/logo-slack.svg";
import MailIcon from "../icons/mail.svg";
import HeaderStyles from "./header.module.css";

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return (
    <header className={HeaderStyles.root}>
      <div className={HeaderStyles.container}>
        <div className={HeaderStyles.left}>
          <Link to="/">
            <img
              src={Logo}
              className={HeaderStyles.logo}
              alt={site.siteMetadata.title}
            />
          </Link>
        </div>
        <div className={HeaderStyles.right}>
          <a
            rel="noopener"
            target="_blank"
            className={HeaderStyles.iconLink}
            href="https://github.com/nettiopsu/designtechnologist"
          >
            <img
              src={GithubLogo}
              alt="Github repository"
              className={HeaderStyles.icon}
            />
          </a>
          <a className={HeaderStyles.iconLink} href="/slack">
            <img
              src={SlackLogo}
              alt="Slack community"
              className={HeaderStyles.icon}
            />
          </a>
          <a className={HeaderStyles.iconLink} href="/contact">
            <img
              src={MailIcon}
              alt="Send us an e-mail"
              className={HeaderStyles.icon}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
