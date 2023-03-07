import React from "react";

import "./styles.scss";

const Badge = ({ heading, value }) => {
  return (
    <div className="badge">
      <div className="badge__heading">{heading}</div>
      <div className="badge__value">{value}</div>
    </div>
  );
};

export default Badge;
