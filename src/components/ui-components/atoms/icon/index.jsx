import React from "react";

import "./styles.scss";

const Icon = ({ iconElement, isActive }) => {
  return <div className={`icon-container ${isActive ? "active" : ""}`}>{iconElement}</div>;
};

export default Icon;
