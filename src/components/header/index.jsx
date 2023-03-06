import React, { useState } from "react";
import { Search, Bell, ProfilePicture } from "../../assets";
import "./styles.scss";
import { Button, Popover } from "antd";

const popoverStyle = {
  margin: "0 20px 0 0",
  padding: "30px",
};

const Header = () => {
  const username = "Vijendrachar M";

  const [openUserModal, setOpenUserModal] = useState(false);

  const userPopoverContent = (
    <div className="popover">
      <div className="popover-header">Account status</div>
      <div className="popover-body">Incomplete</div>
    </div>
  );

  return (
    <div className="header">
      <div className="header__username">{username}</div>
      <div className="header__action-icons">
        <div className="icon-container">
          <Search />
        </div>
        <div className="icon-container">
          <Bell />
        </div>

        <div>
          <Popover
            open={openUserModal}
            onOpenChange={(newOpen) => setOpenUserModal(newOpen)}
            content={userPopoverContent}
            trigger="click"
            overlayClassName="user-profile"
            overlayInnerStyle={popoverStyle}
          >
            <div className="user-profile__icon">
              <ProfilePicture width="55px" />
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
