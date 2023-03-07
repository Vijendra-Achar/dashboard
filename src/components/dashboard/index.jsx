import React from "react";
import Targets from "../targets";

import "./styles.scss";

const Dashboard = () => {
  return (
    <div>
      {/* Left side main section */}
      <div>
        <Targets />
      </div>
      {/* Right side section */}
      <div></div>
    </div>
  );
};

export default Dashboard;
