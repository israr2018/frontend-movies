import React, { useContext } from "react";
import { VerticalNavHeading, Navitem } from "Components/nav";
import { createFromIconfontCN, DashboardOutlined } from "@ant-design/icons";
import * as Bsicon from "react-bootstrap-icons";

const IconFont = createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/font_2320609_dw99pndv32b.js"],
});

const Sidebar = (props) => {
  return (
    <div
      className={`${props.className} vurox-vertical-nav`}
      style={{ width: props.width + "px" }}
    >
      <ul>
        <VerticalNavHeading>Dashboards</VerticalNavHeading>

        <Navitem
          link="/dashboard"
          icon={<DashboardOutlined />}
          text="Dashboard"
        />
        <Navitem
          link="/campaigns"
          icon={<IconFont type="icon-campaign" />}
          text="Campaigns"
        />
        <Navitem link="/stores" icon={<Bsicon.Shop />} text="Stores" />
      </ul>
    </div>
  );
};
export default Sidebar;
