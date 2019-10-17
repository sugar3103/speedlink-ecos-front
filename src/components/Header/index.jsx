import React from "react";
import "./index.scss";
import * as $ from "jquery";

function Header(props) {
  const container = {
    browseWidth: window.innerWidth || document.body.clientWidth,
    originWidth:
      window.innerWidth * (85 / 100) || document.body.clientWidth * (85 / 100)
  };

  const showNavLeft = () => {
    $("#navbar-fixed-left").animate({ width: "toggle" }, "100");
    // toggle width of container
    const toggleWidth =
      $(".container").width() === container.originWidth
        ? container.browseWidth
        : container.originWidth;
    $(".container")
      .animate({ width: toggleWidth }, 350)
      .toggleClass("marginLeft-0");
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    curse: "pointer",
    color: props.color
  };

  const searchStyle = {
    background: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "10px",
    verticalAlign: "middle"
  };
  
  return (
    <>
      {/* <p>This is Header</p> */}
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar">
            <div className="lnr-menu-div">
              <span
                className="lnr lnr-menu"
                onClick={() => showNavLeft()}
              ></span>
            </div>
            <a className="navbar-brand" href="/">
              <img
                src={window.location.origin + "/img/logo/logo-official.png"}
                alt="logo"
                width="140px"
              />
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="page-title">
              <a href="_#">{}</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <button type="submit" style={buttonStyle}>
                <i style={searchStyle} className="fas fa-search"></i>
              </button>
            </li>
            <li>
              <a href="_blank">
                <i className="fas fa-bell"></i>
              </a>
            </li>
            <li>
              <a href="_blank">
                <i className="far fa-user-circle"></i>
                <i className="lnr lnr-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="_blank">
                <img
                  src={window.location.origin + "/img/language_logo/en.png"}
                  alt="english flag"
                />
                EN
                <i className="lnr lnr-chevron-down"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
