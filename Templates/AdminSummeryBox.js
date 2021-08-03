import React from "react";
import { connect } from "react-redux";
import { VuroxComponentsContainer } from "Components/layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Row, Col } from "antd";
const vuroxDarkToolTipStyles = {
  backgroundColor: "#000",
  border: "none",
  borderRadius: "3px",
  fontSize: "12px",
};
class AdminSummeryBox extends React.Component {
  render() {
    return (
      <Row gutter={{ xs: 4, sm: 6, md: 8 }} className="admin-summary-box">
        <Col md={12} lg={4} sm={12} className="w-100 mb-2 d-flex">
          <div className="vurox-admin-components-block rounded overview-hidden bg-cyan-7 w-100">
            <div className="vurox-admin-components-block-content bg-cyan-7 constant-white">
              <h4 className="text-white">Total Customers</h4>
              <h3 className="text-white">100 </h3>
            </div>
          </div>
        </Col>
        <Col md={12} lg={4} sm={12} className="w-100 mb-2 d-flex">
          <div className="vurox-admin-components-block rounded overview-hidden bg-blue-7 w-100">
            <div className="vurox-admin-components-block-content bg-blue-7 constant-white">
              <h4 className="text-white">Total Transactions</h4>
              <h3 className="text-white">$124</h3>
            </div>
          </div>
        </Col>
        <Col md={12} lg={5} sm={12} className="w-100 mb-2 d-flex">
          <div className="vurox-admin-components-block rounded overview-hidden bg-purple-7 w-100">
            <div className="vurox-admin-components-block-content constant-white">
              <h4 className="text-white">Reward Points Summary</h4>
              <h3 className="text-white">100,000</h3>
            </div>
          </div>
        </Col>
        <Col md={12} lg={5} sm={12} className="w-100 mb-2 d-flex">
          <div className="vurox-admin-components-block rounded overview-hidden bg-cyan-7 w-100">
            <div className="vurox-admin-components-block-content constant-white">
              <h4 className="text-white">Total Amount owed to Plastk</h4>
              <h3 className="text-white">100,000</h3>
            </div>
          </div>
        </Col>
        <Col md={12} lg={6} sm={12} className="w-100 mb-2 d-flex">
          <div className="vurox-admin-components-block rounded overview-hidden bg-green-7 w-100">
            <div className="vurox-admin-components-block-content constant-white">
              <h4 className="text-white">Reviews</h4>
              <h3 className="text-white">0</h3>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default connect((state) => state)(AdminSummeryBox);
