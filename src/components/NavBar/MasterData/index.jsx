import React from "react";
import "./index.scss";
import LiTag from "../../Atom/LiTag";

function MasterData(props) {
  return (
    <LiTag
      link={"#"}
      dropdown={"dropdown "}
      fasClassName={"lnr lnr-database"}
      title="Master Data"
    />
  );
}

export default MasterData;
