// @ts-nocheck
import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import * as $ from "jquery";

function LiTag(props) {
  const iconStyle = {
    float: "right",
    fontSize: "10px",
    padding: "3px 0 0 0"
  };

  const divStyle = {
    width: "100%"
  };

  const showSubMenu = values => {
    if (props.subMenuId) {
      $(`#${props.subMenuId}`).animate({ height: "toggle" }, 350);
      $(`#${props.arrowId}`).toggleClass("lnr-chevron-right lnr-chevron-down");
    }
    var tag = document.getElementsByClassName("li-tag");
    const tagLen = tag.length;
    for (var i = 0; i < tagLen; i++) {
      tag[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  };
  return (
    <>
      <li
        className={props.dropdown + props.active + " li-tag"}
        onClick={() => showSubMenu()}
      >
        <Link
          to={props.link || "#"}
          // className={props.active + " li-tag"}
          // activeStyle={activeStyle}
        >
          <div style={divStyle}>
            <span className={props.fasClassName} /> {props.title}
            {props.dropdown ? (
              <span
                id={props.arrowId}
                className="lnr lnr-chevron-right"
                style={iconStyle}
              />
            ) : (
              ""
            )}
          </div>
        </Link>
      </li>
    </>
  );
}

export default LiTag;
