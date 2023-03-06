import React, { useState } from "react";
import "./styles.scss";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { Dashboard, Investor, Discount, Reports, Transfer } from "../../assets";

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
    },
    {
      label: "Offerings",
      icon: <Discount />,
    },
    {
      label: "Reporting",
      icon: <Reports />,
    },
    {
      label: "Transfers",
      icon: <Transfer />,
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
              icon={<div className={`side-menu__icon-container ${item?.isActive ? "active" : ""}`}>{item?.icon}</div>}
              label={item?.label}
            ></SubMenu>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default MenuSidebar;
