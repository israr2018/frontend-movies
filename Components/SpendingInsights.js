import React from "react";

import { VuroxComponentsContainer } from "Components/layout";

import {
  VuroxChartsBoxHead,
  processDualChartsData,
  VuroxCustomTick,
  vuroxDarkToolTipStyles,
} from "./charts";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import { VuroxProgressbar } from "./progressbar";

import { Col } from "antd";
import axios from "axios";
import constant from "../Constants/constants";

export class SpendingInsights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      piedata: [],
      colors: ["#7B4DFF", "#F7614E", "#f9be49", "#F7614E", "#F2514E"],
    };
  }

  getSpendingInsight = async (e) => {
    await axios
      .get(`${constant._card}/cards/get-spending-insight`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem(
            "account_plastk_token"
          )}`,
        },
      })
      .then((res) => {
        // console.log("On Spending Insight => ", res.data);
        // let r = res.data.data.map( (item, index)  => {
        //   item.color = this.state.colors[index];
        //   return item
        // })

        this.setState({ piedata: res.data.data });
      });
  };

  componentDidMount() {
    this.getSpendingInsight();
  }

  render() {
    const piedata = this.state.piedata;
    return (
      <VuroxComponentsContainer>
        <VuroxChartsBoxHead>
          <h5>Spending Insights</h5>
          <p className="vurox-text-sizes">Tells you about your spending's </p>
        </VuroxChartsBoxHead>
        <ResponsiveContainer width="100%" height={185}>
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={piedata}
              startAngle={360}
              endAngle={0}
              innerRadius={35}
              outerRadius={85}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              stroke={0}
            >
              {piedata.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Col md={24} className="p-4">
          {piedata.map((item) => {
            return (
              <VuroxProgressbar
                progresstextleft={item.category}
                progresstextright={"$" + item.value}
                progresscolor={item.color}
                width={item.percentage + "%"}
              />
            );
          })}
          {/* <VuroxProgressbar progresstextleft='Entertainment' progresstextright='$239.00' progresscolor='#F7614E' width='85%' />
          <VuroxProgressbar progresstextleft='Bills/Utilities' progresstextright='$984.00' progresscolor='#f9be49' width='60%' />
          <VuroxProgressbar progresstextleft='Transportation' progresstextright='$239.00' progresscolor='#F7614E' width='85%' /> */}
        </Col>
      </VuroxComponentsContainer>
    );
  }
}
