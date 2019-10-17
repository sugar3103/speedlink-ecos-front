import React from "react";
import "./index.scss";
import LiTag from "../../Atom/LiTag";

function Dashboard(props) {
 
  return (
    <>
      <LiTag
        link={"/dashboard"}
        active={" active"}
        fasClassName={"lnr lnr-cloud"}
        title="DashBoard"
      />
    </>
  );
}

export default Dashboard;
