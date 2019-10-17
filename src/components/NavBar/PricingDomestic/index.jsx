import React from "react";
import "./index.scss";
import LiTag from "../../Atom/LiTag";
import ScrollBar from "../../Atom/ScrollBar";

function PricingDomestic(props) {
  return (
    <>
      <LiTag
        dropdown={"dropdown "}
        fasClassName={"lnr lnr-tag"}
        title="Pricing Domestic"
        subMenuId={"sub-pricingDomestic"}
        arrowId={"arrowDomesticId"}
      />
      <ul className="subMenu sub-pricingDomestic" id="sub-pricingDomestic">
        <LiTag
          link={"/pricing-domestic/pricing"}
          fasClassName={"lnr lnr-license"}
          title={"Pricing"}
        />
        <LiTag
          link={"/pricing-domestic/area"}
          fasClassName={"lnr lnr-map"}
          title={"Area"}
        />
        <LiTag
          link={"/pricing-domestic/range-weight"}
          fasClassName={"lnr lnr-license"}
          title={"Range Weight"}
        />
        <LiTag
          link={"/pricing-domestic/zone"}
          fasClassName={"lnr lnr-map"}
          title={"Zone"}
        />
      </ul>
      <ScrollBar />
    </>
  );
}

export default PricingDomestic;
