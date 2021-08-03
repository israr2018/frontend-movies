import Header from "Templates/Head";
import Link from "next/link";
import {
  VuroxLayout,
  ContentLayout,
  VuroxComponentsContainer,
} from "../Components/layout";
import { motion } from "framer-motion";

import { Form, Input, Button, Select, Checkbox, notification } from "antd";
import {
  MailOutlined,
  LockOutlined,
  IdcardOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import user_api  from '../Actions/api/user_api'

const { Option } = Select;

import { Row, Col } from "antd";
import React, { useState } from 'react'

export default function SignUp() {
  const[email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [contactNumber,setContactNumber]=useState();
  const registerUser=async()=>{
    let payload={email, password,contact_number:contactNumber};
    user_api.registerUser(payload)
    .then((res)=>{
      if(res.name==='Error'){
        notification.error({
          message: `Error`,
          description:
            res.response.data.message,
          placement: "bottomRight",
        });
      }
      else{
        notification.success({
          message: `Success`,
          description:
            res.data.message,
          placement: "bottomRight",
        });
       
      }

    })
    .catch((err)=>{
        


    });
  }
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
                    <div className="flipper" id="flipper">
                      <VuroxComponentsContainer className="py-4 px-3 p-xl-4 registration-container">
                        <div className="logo text-center mb-4">
                          <a href="#">
                            <img
                              src="./image/logo-dark.png"
                              alt="Plastk"
                              width="150"
                            />
                          </a>
                        </div>
                        <Form
                          name="user_signup"
                          className="registration-section"
                        >
                          {/* <Form.Item name="businessName">
                            <Input
                              prefix={
                                <IdcardOutlined className="site-form-item-icon" />
                              }
                              placeholder="Business Name"
                            />
                          </Form.Item> */}
                          <Form.Item
                            name="email"
                            rules={[
                              {
                                type: "email",
                                message: "The input is not valid E-mail!",
                              },
                              {
                                required: true,
                                message: "Please input your E-mail!",
                              },
                            ]}
                          >
                            <Input
                              prefix={<MailOutlined />}
                              placeholder="Email"
                              onChange={(e)=>{setEmail(e.target.value)}}
                            />
                          </Form.Item>

                          <Form.Item
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: "Please input your password!",
                              },
                            ]}
                            hasFeedback
                          >
                            <Input.Password
                              prefix={
                                <LockOutlined className="site-form-item-icon" />
                              }
                              placeholder="Password"
                              onChange={(e)=>{setPassword(e.target.value)}}
                            />
                          </Form.Item>

                          <Form.Item
                            name="confirm"
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please confirm your password!",
                              },
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (
                                    !value ||
                                    getFieldValue("password") === value
                                  ) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(
                                    "The two passwords that you entered do not match!"
                                  );
                                },
                              }),
                            ]}
                          >
                            <Input.Password
                              prefix={
                                <LockOutlined className="site-form-item-icon" />
                              }
                              placeholder="Confirm Password"
                            />
                          </Form.Item>
                          <Form.Item
                            name="contactNumber"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your contact number",
                              },
                            ]}
                          >
                            <Input
                              prefix={
                                <PhoneOutlined className="site-form-item-icon" />
                              }
                              placeholder="Primary Contact Number"
                              onChange={(e)=>{setContactNumber(e.target.value)}}
                            />
                          </Form.Item>
                          <Form.Item>
                            <Checkbox>
                              I read and agree to{" "}
                              <a href="#">Terms &amp; Conditions</a>
                            </Checkbox>
                          </Form.Item>
                          <Form.Item className="mb-3">
                            <Button
                              htmlType="submit"
                              type="primary"
                              size="large"
                              id="registerButton"
                              className="register-form-button mx-auto"
                              block
                              onClick={()=>{registerUser()}}
                            >
                              Register
                            </Button>
                          </Form.Item>
                          <span className="font-weight-bold text-center d-block">
                            Already have an account?{" "}
                            <Link href="/" id="signInButton">
                              Sign in
                            </Link>
                          </span>
                        </Form>
                      </VuroxComponentsContainer>
                    </div>
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
