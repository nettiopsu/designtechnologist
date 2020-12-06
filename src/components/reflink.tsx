import { FunctionComponent } from "preact";
import React from "react";

const RefLink: FunctionComponent<any> = ({ children, ...props }) => {
  const href = props.href ? props.href : "";
  return (
    <>
      {children} {children && "("}
      <a href={href} target="_blank" rel="noopener">
        {href}
      </a>
      {children && ")"}
    </>
  );
};

export default RefLink;
