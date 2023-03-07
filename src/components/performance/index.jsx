import React, { useState } from "react";
import "./styles.scss";
import { DividerLine, Badge } from "../ui-components/atoms";

import BarChart from "../ui-components/molecules/bar-chart";

const badgeData = [
  {
    heading: "Mutual funds",
    value: "33.1K",
  },
  {
    heading: "Digital Gold",
    value: "4.53L",
  },
  {
    heading: "Insurance",
    value: "4.53L",
  },
  {
    heading: "Bonds",
    value: "33.1K",
  },
];

const Performance = () => {
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
          <div className="section-title">
            <p>Your Performance</p>
          </div>
          <DividerLine />
          <BarChart chartData={chartData} />
        </div>
        <div className="cards-badges">
          {badgeData?.map((item) => (
            <Badge key={item?.heading} heading={item?.heading} value={item?.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
