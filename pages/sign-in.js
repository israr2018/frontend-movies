import React from "react";
import Header from "Templates/Head";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import { VuroxLayout, ContentLayout } from "../Components/layout";

import SignIn from "../Components/SignIn";

import { Row, Col } from "antd";
class index extends React.Component {
  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <React.Fragment>
          <Header />

          <VuroxLayout>
            <div
              style={{ backgroundImage: "url('../image/signup-bg.jpg')" }}
              className="w-100 signin-form"
            >
              <ContentLayout
                width="100%"
                className="p-1 min-vh-100 d-flex justify-content-center align-items-center "
              >
                <Row justify={"center"} className="w-100">
                  <Col xs={20} md={10} xl={6}>
                    <div className="flip-form-container">
                      <SignIn />
                    </div>
                  </Col>
                </Row>
              </ContentLayout>
            </div>
          </VuroxLayout>
        </React.Fragment>
      </motion.div>
    );
  }
}
export default connect((state) => state)(index);
