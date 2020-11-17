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
import Footer from "./footer";

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
        },
        refLink: ({ children, ...props }) => {
          const properties = props as any;
          return (
            <>
              {children} {children && "("}
              <a target="_blank" rel="noopener" {...props}>
                {properties.href}
              </a>
              {children && "("}
            </>
          );
        }
      }}
    >
      <Header />
      <div className={LayoutStyles.container}>
        <main className={LayoutStyles.content}>{children}</main>
      </div>
      <Footer />
    </MDXProvider>
  );
};

export default Layout;
