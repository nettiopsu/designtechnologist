import React from "react";
import FooterStyles from "./footer.module.css";

const Footer = () => (
  <footer>
    <div className={FooterStyles.container}>
      <a href="https://github.com/nettiopsu/designtechnologist" target="_blank">
        GitHub
      </a>
      <a
        target="_blank"
        href="https://join.slack.com/t/designtechnologists/shared_invite/enQtOTU2MTc4OTE5NDI3LTUzYzZhM2Y0NDEwODgzZWNjNTAxYzVjM2EyNTI4ODIyYjFmZTg1YTRmOTdiNmQ0MDNkZGFhMTFiOGUxNDc5NmM"
      >
        Slack
      </a>
      <a href="/license">License</a>
      <a href="/contact">Contact us</a>
    </div>
  </footer>
);

export default Footer;
