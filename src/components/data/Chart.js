import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ info, label }) => {
  // create date array for chart label (x axis)
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

  const data = {
    labels: chartLabel,
    datasets: [
      {
        label: label,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: infoArray,
      },
    ],
  };

  return (
    <div>
      <h1>This is where the chart will go</h1>
      <Line data={data} />
    </div>
  );
};

export default Chart;
