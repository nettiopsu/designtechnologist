/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Container from "./container";
import Footer from "./footer";
import Header from "./header";
import RefLink from "./reflink";
import "./layout.css";

interface Props {
  children: any;
  wide?: boolean;
}

const Layout = ({ children, wide }: Props) => {
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
        refLink: RefLink
      }}
    >
      <Header />
      <Container wide={wide}>{children}</Container>
      <Footer />
    </MDXProvider>
  );
};

export default Layout;
