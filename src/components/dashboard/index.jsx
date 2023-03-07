import React from "react";
import Targets from "../targets";
import Performance from "../performance";
import SIP from "../sip";

import InfoCard from "../ui-components/molecules/info-card";

import "./styles.scss";

const marketData = [
  {
    heading: "Market Data",
    data: "Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.",
  },
  {
    heading: "Market Data",
    data: "Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.",
  },
  {
    heading: "Market Data",
    data: "Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.",
  },
  {
    heading: "Market Data",
    data: "Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Left side main section */}
      <div className="dashboard__left-side">
        <Targets />
        <Performance />
        <SIP />
      </div>
      {/* Right side section */}
      <div className="dashboard__right-side">
        {marketData?.map((item, index) => (
          <InfoCard key={index} heading={item?.heading} data={item?.data} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
