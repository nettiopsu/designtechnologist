import React from "react";

import ContainerStyles from "./container.module.css";

interface Props {
  children: any;
  twoColumns?: boolean;
}

const Container = ({ children, twoColumns }: Props) => {
  return (
    <div
      className={
        ContainerStyles.container +
        " " +
        (twoColumns
          ? ContainerStyles.containerTwoColumns
          : ContainerStyles.containerOneColumn)
      }
    >
      {children}
    </div>
  );
};

export default Container;
