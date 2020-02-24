import { Link } from "gatsby";
import React from "react";
import Logo from "../images/logo.svg";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle = "" }: Props) => (
  <header
    style={{
      background: `#0899BC`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        height: `64px`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <img src={Logo} style={{ display: "inline-block" }} />
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
