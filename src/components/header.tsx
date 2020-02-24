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
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        <img src={Logo} style={{ display: "inline-block" }} />
        <div
          style={{
            fontFamily: "Fira Sans",
            display: "inline-flex",
            height: 64,
            backgroundColor: "#fff",
            paddingLeft: 16,
            paddingRight: 16,
            verticalAlign: "top",
            color: "#453E3E",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {siteTitle}
        </div>
      </Link>
    </div>
  </header>
);

export default Header;
