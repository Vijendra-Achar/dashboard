import React from "react";

import { DataCard } from "../ui-components/molecules";
import { DividerLine } from "../ui-components/atoms";
import { Fund, GoldBricks, Shield, Bonds } from "../../assets";

// Data for display
const cardsData = [
  {
    title: "Mutual Funds",
    logoIcon: <Fund />,
    values: { value: "23.5k", totalValue: "25k" },
  },
  {
    title: "Digital Gold",
    logoIcon: <GoldBricks />,
    values: { value: "23.5k", totalValue: "25k" },
  },
  {
    title: "Insurance",
    logoIcon: <Shield />,
    values: { value: "23.5k", totalValue: "25k" },
  },
  {
    title: "Bonds",
    logoIcon: <Bonds />,
    values: { value: "23.5k", totalValue: "25k" },
  },
];

const Targets = () => {
  return (
    <div>
      {/* Targets section */}
      <div className="box-container">
        <div className="data-container">
          <h1 className="section-title">Your targets</h1>
          <DividerLine />
          <div className="cards-container">
            {cardsData?.map((item) => (
              <DataCard data={item?.values} title={item?.title} logoIcon={item?.logoIcon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Targets;
