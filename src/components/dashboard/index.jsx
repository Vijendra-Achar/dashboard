import React from "react";
import Targets from "../targets";
import Performance from "../performance";

import "./styles.scss";

const Dashboard = () => {
  return (
    <div>
      {/* Left side main section */}
      <div>
        <Targets />
        <Performance />
      </div>
      {/* Right side section */}
      <div></div>
    </div>
  );
};

export default Dashboard;
