import App, { Container } from "next/app";
import { Provider } from "react-redux";
import React from "react";
import { VuroxContextProvider } from "../context";
import { AnimatePresence } from "framer-motion";

import "swiper/swiper.less";
import "Styles/styles.less";
import "antd/dist/antd.less";
import "Styles/custom.less";

import store from "../redux/store";

class VuroxApp extends App {
  state = {
    width: "",
    isAuth: false,
  };
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  getCookie(name) {
    var cookieArr = document.cookie.split(";");

    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if (name == cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }

  componentWillMount() {
    const isClient = typeof window === "object";
    const width = isClient ? window.innerWidth : undefined;
    this.setState({ width: width });
  }
  // componentDidMount() {
  //   const isClient = typeof window === "object";
  //   if (isClient) {
  //     const token = localStorage.getItem("account_plastk_token");
  //     const status = localStorage.getItem("account_plastk_status");
  //     if (token) {
  //       const decoded = jwtDecode(token);
  //       const currentDate = new Date();
  //       const expiryDate = new Date(decoded.exp * 1000);
  //       if (currentDate < expiryDate) {
  //         if (status == "true") {
  //           if (typeof window.location.href.split("/")[1] === "undefined") {
  //             Router.push("/account-summary");
  //           }
  //         } else {
  //           Router.push("/dashboard");
  //         }
  //         this.setState({
  //           isAuth: true,
  //         });
  //       } else {
  //         Router.push("/");
  //       }
  //     } else {
  //       let tokenCookie = this.getCookie("account_plastk_token");
  //       let statusCookie = this.getCookie("account_plastk_status");

  //       if (tokenCookie) {
  //         localStorage.setItem("account_plastk_token", tokenCookie);
  //         localStorage.setItem("account_plastk_status", statusCookie);
  //         const decoded = jwtDecode(tokenCookie);
  //         const currentDate = new Date();
  //         const expiryDate = new Date(decoded.exp * 1000);
  //         if (currentDate < expiryDate) {
  //           if (statusCookie == "true") {
  //             Router.push("/account-summary");
  //           } else {
  //             Router.push("/dashboard");
  //           }
  //           this.setState({
  //             isAuth: true,
  //           });
  //         } else {
  //           Router.push("/");
  //         }
  //       } else {
  //         Router.push("/");
  //       }
  //     }
  //   }
  // }
  render() {
    const { Component } = this.props;
    return (
      <Provider store={store}>
        <VuroxContextProvider pageWidth={this.state.width}>
          <AnimatePresence exitBeforeEnter>
            <Component>{this.pageProps}</Component>
          </AnimatePresence>
        </VuroxContextProvider>
      </Provider>
    );
  }
}

export default VuroxApp;
