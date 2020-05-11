import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ cases, deaths }) => {
  // if (cases.length > 0) {
  //   dateArray.push(Object.keys(cases[0]));
  // }

  // // cases.map((item) => dateArray.push(Object.keys(item)));
  // if (dateArray.length > 0) {
  //   // console.log(dateArray[0]);
  //   let arrLen = dateArray[0].length;
  //   console.log(arrLen);
  //   let newDateArray = dateArray[0].slice(7, arrLen);
  //   console.log(newDateArray);
  // }

  // console.log(cases[0].UID);
  const dateArray = [];
  dateArray.push(Object.keys(cases[0]));
  const chartLabel = dateArray[0].slice(7, dateArray[0].length);

  console.log(chartLabel);

  const data = {
    labels: chartLabel,
    datasets: [
      {
        label: "Cases",
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
        data: [65, 59, 80, 81, 56, 55, 400],
      },
      {
        label: "Deaths",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(215, 42, 29, 0.4)",
        borderColor: "rgba(215, 42, 29, 0.4)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(215, 42, 29, 0.4)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(215, 42, 29, 0.4)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [45, 23, 94, 57, 52, 67, 400],
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
