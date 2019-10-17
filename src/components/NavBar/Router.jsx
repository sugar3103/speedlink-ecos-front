import React from "react";
import { Route } from "react-router-dom";
import RouterPricingSpecial from "./PricingSpecial/Router";
import DashBoardPage from "./Dashboard/DashBoardPage";
import SystemPage from "./System/SystemPage/Index";
import Layout from "../Layout";
import RouterPricingDomestic from "./PricingDomestic/Router";

function RouterNavBar(props) {
  return (
    <>
      <Layout>
        <RouterPricingSpecial data={props.data} />
        <RouterPricingDomestic data={props.data} />
        <Route exact path="/dashboard" render={() => <DashBoardPage />} />
        
        <Route exact path="/system" component={SystemPage} />
      </Layout>
    </>
  );
}

export default RouterNavBar;
