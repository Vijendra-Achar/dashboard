import React from "react";

import { Dropdown, Button } from "antd";

const DropDownMenu = ({ label, buttonType, buttonIcon, ...props }) => {
  return (
    <Dropdown {...props}>
      <Button type={buttonType} icon={buttonIcon}>
        {label}
      </Button>
    </Dropdown>
  );
};

export default DropDownMenu;
