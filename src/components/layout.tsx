/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Container from "./container";
import Header from "./header";
import Footer from "./footer";
import RefLink from "./reflink";

interface Props {
  children: any;
  twoColumns?: boolean;
}

const Layout = ({ children, twoColumns }: Props) => {
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
      <Container twoColumns={twoColumns}>{children}</Container>
      <Footer />
    </MDXProvider>
  );
};

export default Layout;
