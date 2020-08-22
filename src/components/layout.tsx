/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Header from "./header";
import LayoutStyles from "./layout.module.css";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <MDXProvider
      components={{
        ref: props => {
          return (
            <sup>
              <a href="#references">[{props.children}]</a>
            </sup>
          );
        }
      }}
    >
      <Header />
      <div className={LayoutStyles.container}>
        <main className={LayoutStyles.content}>{children}</main>
        <footer></footer>
      </div>
    </MDXProvider>
  );
};

export default Layout;
