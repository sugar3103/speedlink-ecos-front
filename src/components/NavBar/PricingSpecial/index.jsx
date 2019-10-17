import React from "react";
import "./index.scss";
import LiTag from "../../Atom/LiTag";
import ScrollBar from "../../Atom/ScrollBar";

function PricingSpecial(props) {

  return (
    <>
      <LiTag
        dropdown={"dropdown "}
        fasClassName={"lnr lnr-tag"}
        title="Pricing Special"
        subMenuId={"sub-pricingSpecial"}
        arrowId={"arrowSpecialId"}
      />
      <ul className="subMenu sub-pricingSpecial" id="sub-pricingSpecial">
        <LiTag
          link={"/pricing-special/pricing"}
          fasClassName={"lnr lnr-license"}
          title={"Pricing"}
        />
        <LiTag
          link={"/pricing-special/area"}
          fasClassName={"lnr lnr-map"}
          title={"Area"}
        />
        <LiTag
          link={"/pricing-special/range-weight"}
          fasClassName={"lnr lnr-license"}
          title={"Range Weight"}
        />
        <LiTag
          link={"/pricing-special/zone"}
          fasClassName={"lnr lnr-map"}
          title={"Zone"}
        />
      </ul>
      <ScrollBar />
    </>
  );
}

export default PricingSpecial;
