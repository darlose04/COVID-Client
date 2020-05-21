import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const ReChart = ({ info }) => {
  const dateArray = [];
  dateArray.push(Object.keys(info[0]));
  const chartLabel = dateArray[0].slice(7, dateArray[0].length);

  const infoArray = [];

  chartLabel.map((date) => {
    let numInfo = 0;
    info.map((item) => {
      numInfo += item[date];
    });
    infoArray.push(numInfo);
  });

  let data = {};
  chartLabel.forEach((label, i) => (data[label] = infoArray[i]));
  // console.log(data);

  return (
    <div>
      <LineChart></LineChart>
    </div>
  );
};

export default ReChart;
