import React from "react";
import Container from "./container";
import { footerContainer } from "./footer.module.css";
import Newsletter from "./newsletter";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <Newsletter />
        </div>
        <div className={footerContainer}>
          <a href="/book">Handbook</a>
          <a href="/slack">Slack community</a>
          <a href="/newsletter">Newsletter</a>
          <a href="/about">About the author</a>
          <a href="/contact">Contacts</a>
          <a href="/license">License</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
