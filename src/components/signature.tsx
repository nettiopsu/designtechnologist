import React from "react";

import CommonStyles from "../css/common.module.css";

const Signature = () => {
  return (
    <div className={CommonStyles.signature}>
      --
      <div>Sincerely yours,</div>
      <div>Konstantin</div>
      <div>Design Technologist</div>
    </div>
  );
};

export default Signature;
