import React from "react";
import { Icon, ProgressBar, DropDownMenu } from "../../atoms";
import { Menu } from "../../../../assets";

import "./styles.scss";

const items = [
  {
    key: "1",
    label: <a>Edit</a>,
  },
  {
    key: "2",
    label: <a>Delete</a>,
  },
];

const DataCard = ({ title, data, logoIcon }) => {
  return (
    <div className="card__container">
      <div className="card__left-side">
        <div className="card__title">
          <Icon iconElement={logoIcon}></Icon>
          <p className="card__title-text">{title}</p>
        </div>
        <div className="card__progress">
          <ProgressBar percent={30} showInfo={false} />
        </div>
      </div>
      <div className="card__right-side">
        <div className="card__menu">
          <DropDownMenu menu={{ items }} buttonType="link" buttonIcon={<Menu />} />
        </div>
        <div className="card__data">
          <p className="card__data-main">{data?.value}</p>
          <p className="card__data-subtext">of {data?.totalValue}</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
