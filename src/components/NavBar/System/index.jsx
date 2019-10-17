import React from "react";
import "./index.scss";
import LiTag from "../../Atom/LiTag";

function System(props) {
  return (
    <LiTag
      link={"/system"}
      fasClassName={"lnr lnr-cog"}
      title="System"
    />
  );
}

export default System;
