import React from "react";
import { Route } from "react-router-dom";
import AreaSpecial from "./Area";
import PricingSpecial from "./Pricing";
import RangeWeightSpecial from "./RangeWeight";
import ZoneSpeical from "./Zone";

function RouterPricingSpecial(props) {
  return (
    <>
      <Route
        path="/pricing-special/area"
        render={() => <AreaSpecial data={props.data} />}
      />
      <Route
        path="/pricing-special/pricing"
        render={() => <PricingSpecial data={props.data} />}
      />
      <Route
        path="/pricing-special/range-weight"
        render={() => <RangeWeightSpecial data={props.data} />}
      />
      <Route
        path="/pricing-special/zone"
        render={() => <ZoneSpeical data={props.data} />}
      />
    </>
  );
}

export default RouterPricingSpecial;
