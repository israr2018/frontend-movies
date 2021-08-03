import React, { useContext } from "react";
import Header from "./Head";

import { Space } from "antd";
import VuroxHeader, { VuroxBrand } from "Components/Header";

import { GridFill, Grid } from "react-bootstrap-icons";
import { LogoutOutlined } from "@ant-design/icons";

import { vuroxContext } from "../context";

import { Row, Col } from "antd";

const HeaderDark = () => {
  const { toggleMenu, menuState } = useContext(vuroxContext);

  const Logout = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <Header />
      <VuroxHeader version="dark">
        <Row align="middle">
          <Col span={12}>
            <Space direction="horizontal" size="large" align="center">
              <VuroxBrand image="/image/logo-dark.png" className="p-0" />

              {/* {menuState ? (
                <Grid className="vurox-menu-toggler" onClick={toggleMenu} />
              ) : (
                <GridFill className="vurox-menu-toggler" onClick={toggleMenu} />
              )} */}
            </Space>
          </Col>
          <Col span={12}>
            <div className="justify-content-end d-flex flex-row">
              <button
                onClick={Logout}
                className="btn btn-link text-danger mr-3 m-3 text-decoration-none d-flex align-items-center"
              >
                Logout <LogoutOutlined className="ml-1" />{" "}
              </button>
            </div>
          </Col>
        </Row>
      </VuroxHeader>
    </div>
  );
};
export default HeaderDark;
