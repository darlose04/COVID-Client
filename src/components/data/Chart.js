import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ info, label, color }) => {
  // create date array for chart label (x axis)

  // console.log(info);

  const dateArray = [];
  dateArray.push(Object.keys(info[0]));

  const chartLabel = dateArray[0].slice(7, dateArray[0].length);

  const infoArray = [];

  chartLabel.map((date) => {
    let numInfo = 0;
    info.map((item) => {
      numInfo += item[`${date}`];
    });
    infoArray.push(numInfo);
  });

  // console.log(infoArray);

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
