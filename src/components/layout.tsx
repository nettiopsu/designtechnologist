/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import Header from "./header";
import LayoutStyles from "./layout.module.css";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={LayoutStyles.container}>
        <main className={LayoutStyles.content}>{children}</main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
