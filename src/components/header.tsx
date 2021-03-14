import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import BookLogo from "../icons/bookmark.svg";
import CloseIcon from "../icons/close.svg";
import SlackLogo from "../icons/logo-slack.svg";
import PersonIcon from "../icons/person-circle.svg";
import MenuIcon from "../icons/menu.svg";
import NewsletterIcon from "../icons/newspaper.svg";
import Logo from "../images/logo.svg";
import Container from "./container";
import {
  headerContainer,
  headerIcon,
  headerIconLink,
  headerLeft,
  headerLogo,
  headerMobileMenuButton,
  headerMobileMenuContainer,
  headerMobileMenuIcon,
  headerRight,
  headerRoot
} from "./header.module.css";

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
    <header className={headerRoot}>
      <Container wide={true}>
        <div className={headerContainer}>
          <div className={headerLeft}>
            <Link to="/">
              <img
                src={Logo}
                className={headerLogo}
                alt={site.siteMetadata.title}
              />
            </Link>
          </div>
          <div className={headerMobileMenuContainer}>
            <button
              className={headerMobileMenuButton}
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
                className={headerMobileMenuIcon}
                alt=""
              />
            </button>
          </div>
          <nav
            id="menu"
            className={headerRight}
            style={{ display: mobileMenuIsOpen ? "block" : undefined }}
          >
            <a className={headerIconLink} href="/book">
              <img src={BookLogo} alt="" className={headerIcon} />
              Handbook
            </a>
            <a className={headerIconLink} href="/slack">
              <img src={SlackLogo} alt="" className={headerIcon} />
              Slack community
            </a>
            <a className={headerIconLink} href="/newsletter">
              <img src={NewsletterIcon} alt="" className={headerIcon} />
              Newsletter
            </a>
            <a className={headerIconLink} href="/about">
              <img
                src={PersonIcon}
                alt=""
                className={headerIcon}
                aria-hidden="true"
              />
              About the author
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
