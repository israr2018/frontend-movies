import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import Header from "Templates/Header";
import Sidebar from "Templates/HeaderSidebar";
import {
  VuroxLayout,
  HeaderLayout,
  VuroxSidebar,
  ContentLayout,
} from "Components/layout";

import { vuroxContext } from "../context";

class AppContainer extends React.Component {
  static contextType = vuroxContext;

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: "",
      menuInitialClosed: true,
      doubleBarChartData: [],
      doubleBarChartData2: [],
    };
  }

  componentDidMount() {}

  render() {
    const { menuState } = this.context;
    const menuStateNow =
      this.state.menuInitialClosed === menuState ? false : true;
    const toggleClass = menuStateNow ? "menu-open" : "menu-closed";
    return (
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <React.Fragment>
          <HeaderLayout className="sticky-top">
            <Header />
          </HeaderLayout>
          <VuroxLayout>
            <VuroxSidebar
              width={240}
              className={`sidebar-container initial-closed ${toggleClass}`}
            >
              <Sidebar className={toggleClass} />
            </VuroxSidebar>
            <ContentLayout width="100%" className="vurox-scroll-y p-3">
              {this.props.children}
            </ContentLayout>
          </VuroxLayout>
        </React.Fragment>
      </motion.div>
    );
  }
}
export default connect((state) => state)(AppContainer);
