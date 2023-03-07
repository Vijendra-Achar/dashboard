import React, { useState } from "react";
import "./styles.scss";
import { DataCard } from "../ui-components/molecules";
import { DividerLine } from "../ui-components/atoms";
import { Fund, GoldBricks, Shield, Bonds } from "../../assets";

import DoughnutChart from "../ui-components/molecules/doughnut-chart";

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

const SIP = () => {
  const [chartData, setChartData] = useState({
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  });

  return (
    <div>
      {/* Targets section */}
      <div className="box-container targets-box">
        <div className="data-container">
          <h1 className="section-title">Your SIPs</h1>
          <DividerLine />
          <div className="cards-container">
            {cardsData?.map((item) => (
              <DataCard key={item?.title} data={item?.values} title={item?.title} logoIcon={item?.logoIcon} />
            ))}
          </div>
        </div>
        <div className="cards-chart">
          <DoughnutChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default SIP;
