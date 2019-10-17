import React from "react";
import { Route } from "react-router-dom";
import AreaDomestic from "./Area";
import PricingDomestic from "./Pricing";
import RangeWeightDomestic from "./RangeWeight";
import ZoneDomestic from "./Zone";

function RouterPricingDomestic(props) {
  return (
    <>
      <Route
        path="/pricing-domestic/area"
        render={() => <AreaDomestic data={props.data} />}
      />
      <Route
        path="/pricing-domestic/pricing"
        render={() => <PricingDomestic data={props.data} />}
      />
      <Route
        path="/pricing-domestic/range-weight"
        render={() => <RangeWeightDomestic data={props.data} />}
      />
      <Route
        path="/pricing-domestic/zone"
        render={() => <ZoneDomestic data={props.data} />}
      />
    </>
  );
}

export default RouterPricingDomestic;
