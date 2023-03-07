import React from "react";

import "./styles.scss";

const InfoCard = ({ heading, data }) => {
  return (
    <div className="info">
      <div className="info__heading">{heading}</div>
      <div className="info__data">{data}</div>
      <div className="info__cta">Read more</div>
    </div>
  );
};

export default InfoCard;
