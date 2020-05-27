import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ReChart = ({ info, value, color }) => {
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

  let data = [];
  // chartLabel.forEach((label, i) => (data[label] = infoArray[i]));

  for (let i = 0; i < chartLabel.length; i++) {
    let dataObj = {
      date: chartLabel[i],
      value: infoArray[i],
    };

    data.push(dataObj);
  }

  console.log(data);

  return (
    <div>
      <LineChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 5, right: 5, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Line type="monotone" dataKey={value} stroke={color} />
      </LineChart>
    </div>
  );
};

export default ReChart;
