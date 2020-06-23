import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ info, label, color }) => {
  // create date array for chart label (x axis)
  const dateArray = Object.keys(info[0]);
  // dateArray.push(Object.keys(info[0]));
  // console.log(dateArray);

  const chartLabel = dateArray.slice(7, dateArray.length);

  const infoArray = [];

  chartLabel.map((date) => {
    let numInfo = 0;
    info.map((item) => {
      numInfo += item[`${date}`];
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
        backgroundColor: color,
        borderColor: color,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: color,
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: infoArray,
      },
    ],
  };

  return (
    <div className="line-chart">
      <Line
        data={data}
        options={{ maintainAspectRatio: false }}
        width={830}
        height={490}
      />
    </div>
  );
};

export default Chart;
