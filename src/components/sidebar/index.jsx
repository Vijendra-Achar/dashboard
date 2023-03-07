import React, { useState } from "react";
import "./styles.scss";

import { Sidebar, Menu, SubMenu, useProSidebar } from "react-pro-sidebar";
import { Dashboard, Investor, Discount, Reports, Transfer } from "../../assets";

import { Icon } from "../ui-components/atoms";

const MenuSidebar = () => {
  const { collapseSidebar } = useProSidebar();

  const [menuItems, setMenuItems] = useState([
    {
      label: "Dashboard",
      icon: <Dashboard />,
      isActive: true,
    },
    {
      label: "Investor",
      icon: <Investor />,
      isActive: false,
    },
    {
      label: "Offerings",
      icon: <Discount />,
      isActive: false,
    },
    {
      label: "Reporting",
      icon: <Reports />,
      isActive: false,
    },
    {
      label: "Transfers",
      icon: <Transfer />,
      isActive: false,
    },
  ]);

  return (
    <div className="side-menu__container">
      <Sidebar className="side-menu">
        <Menu>
          {menuItems?.map((item, index) => (
            <SubMenu
              active={item?.isActive}
              className="side-menu__menu-item"
              key={index}
              icon={<Icon iconElement={item?.icon} isActive={item?.isActive} />}
              label={item?.label}
            ></SubMenu>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default MenuSidebar;
