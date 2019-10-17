import React from "react";
import "./index.scss";
import Dashboard from "./Dashboard";
import MasterData from "./MasterData";
import PricingDomestic from "./PricingDomestic";
import PricingSpecial from "./PricingSpecial";
import System from "./System";

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-inverse navbar-fixed-left"
        id="navbar-fixed-left"
      >
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <Dashboard />
            <MasterData />
            <PricingDomestic />
            <PricingSpecial />
            <System />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
