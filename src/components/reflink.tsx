import { FunctionComponent } from "preact";
import React from "react";

const RefLink: FunctionComponent<any> = ({ children, ...props }) => {
  const href = props.href;
  return (
    <>
      {children}{" "}
      {href && (
        <>
          (
          <a href={href} target="_blank" rel="noopener">
            {href}
          </a>
          )
        </>
      )}
    </>
  );
};

export default RefLink;
