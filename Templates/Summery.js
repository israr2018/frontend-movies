import React from "react";
import { Space } from "antd";
import $ from "jquery";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { Link, animateScroll as scroll } from "react-scroll";
class Summery extends React.Component {
  render() {
    return (
      <div className="vurox-admin-summery">
        <Row>
          <Col xs={24}>
            <Row gutter={20} align="middle" className="pb-3">
              <Col xs={24} md={20}>
                <div className="vurox-admin-welcome">
                  <h5 className="mb-0">
                    Welcome to Plastk Business Accelerator Dashboard
                  </h5>
                </div>
              </Col>
              <Col xs={24} md={4} className="d-flex justify-content-end">
                <span>User ID: 1234</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default connect((state) => state)(Summery);
