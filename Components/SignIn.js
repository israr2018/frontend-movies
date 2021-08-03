import React from "react";
import { VuroxComponentsContainer } from "Components/layout";
import Link from "next/link";

import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const SignIn = () => {
  return (
    <VuroxComponentsContainer className="py-4 px-3 p-xl-4 login-container">
      <div className="logo text-center mb-4">
        <a href="#">
          <img src="./image/logo-dark.png" alt="Plastk" width="150" />
        </a>
      </div>
      <Form name="user_signin" className="login-section">
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please provide an valid email",
              type: "email",
            },
          ]}
        >
          <Input
            size="large"
            type="email"
            prefix={<MailOutlined />}
            placeholder="Email"
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item
          name="password"
          className="mb-1"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            {
              min: 6,
              message: "Please must be at least 8 characters!",
            },
          ]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>
        <a href="#" className="forgot-pass-link">
          Forgot your password?
        </a>
        <Form.Item className="mb-3">
          <Button
            htmlType="submit"
            size="large"
            className="login-form-button mx-auto"
            block
          >
            Sign in
          </Button>
        </Form.Item>
        <span className="font-weight-bold text-center d-block">
          Don't have an account?{" "}
          <Link href="/sign-up" id="SignUpButton">
            Sign up
          </Link>
        </span>
      </Form>
    </VuroxComponentsContainer>
  );
};

export default SignIn;
