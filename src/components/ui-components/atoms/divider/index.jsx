import React from "react";
import { Divider } from "antd";

const dividerStyle = {
  borderWidth: "1px",
  borderColor: "var(--line-color)",
};

const DividerLine = () => {
  return <Divider style={dividerStyle} dashed={true} />;
};

export default DividerLine;
