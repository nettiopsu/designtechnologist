import React from "react";

import ContainerStyles from "./container.module.css";

interface Props {
  children: any;
  wide?: boolean;
}

const Container = ({ children, wide }: Props) => {
  return (
    <div
      className={
        ContainerStyles.container +
        " " +
        (wide ? ContainerStyles.containerWide : ContainerStyles.containerNarrow)
      }
    >
      {children}
    </div>
  );
};

export default Container;
