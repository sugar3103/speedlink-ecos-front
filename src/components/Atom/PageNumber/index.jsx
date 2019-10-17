import React from "react";
import './index.scss';

function PageNumber(props) {

  const sendPageNumberToTable = () => {
    props.click(props.realPage);
  };

  return (
    <>
      <button className={props.className} style={props.btnStyle} onClick={sendPageNumberToTable}>
        {props.pageTitle}
      </button>
    </>
  );
}

export default PageNumber;
