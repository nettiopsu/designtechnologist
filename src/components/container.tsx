import React from "react";
import {
  container,
  containerNarrow,
  containerWide
} from "./container.module.css";

interface Props {
  children: any;
  wide?: boolean;
}

const Container = ({ children, wide }: Props) => {
  return (
    <div className={container + " " + (wide ? containerWide : containerNarrow)}>
      {children}
    </div>
  );
};

export default Container;
