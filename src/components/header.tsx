import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import BookLogo from "../icons/bookmark.svg";
import SlackLogo from "../icons/logo-slack.svg";
import MailIcon from "../icons/mail.svg";
import NewsletterIcon from "../icons/newspaper.svg";
import Logo from "../images/logo.svg";
import Container from "./container";
import HeaderStyles from "./header.module.css";
import CloseIcon from "../icons/close.svg";
import MenuIcon from "../icons/menu.svg";

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

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
      <Container wide={true}>
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
          <div className={HeaderStyles.mobileMenuContainer}>
            <button
              className={HeaderStyles.mobileMenuButton}
              type="button"
              onClick={() => {
                setMobileMenuIsOpen(!mobileMenuIsOpen);
              }}
              aria-label="Menu"
              aria-controls="menu"
              aria-expanded={mobileMenuIsOpen ? "true" : undefined}
              aria-haspopup="true"
            >
              <img
                src={mobileMenuIsOpen ? CloseIcon : MenuIcon}
                className={HeaderStyles.mobileMenuIcon}
              />
            </button>
          </div>
          <nav
            className={HeaderStyles.right}
            style={{ display: mobileMenuIsOpen ? "block" : undefined }}
          >
            <a className={HeaderStyles.iconLink} href="/book">
              <img src={BookLogo} alt="" className={HeaderStyles.icon} />
              Handbook
            </a>
            <a className={HeaderStyles.iconLink} href="/slack">
              <img src={SlackLogo} alt="" className={HeaderStyles.icon} />
              Slack community
            </a>
            <a className={HeaderStyles.iconLink} href="/newsletter">
              <img src={NewsletterIcon} alt="" className={HeaderStyles.icon} />
              Newsletter
            </a>
            <a className={HeaderStyles.iconLink} href="/contact">
              <img
                src={MailIcon}
                alt=""
                className={HeaderStyles.icon}
                aria-hidden="true"
              />
              Contacts
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
