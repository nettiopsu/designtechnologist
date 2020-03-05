import { Link } from "gatsby";
import React from "react";
import Logo from "../images/logo.svg";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle = "" }: Props) => (
  <header
    style={{
      background: `#0899BC`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        height: `64px`
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        <img src={Logo} style={{ display: "inline-block" }} />
      </Link>
    </div>
  </header>
);

export default Header;
