import React from "react";
import "./index.scss";

function PageTitle(props) {
  
  return (
    <>
      <span style={{ textAlign: "center", padding: "20px" }}>
        <strong>{props.pageTitle}</strong>
      </span>
      
    </>
  );
}

export default PageTitle;
