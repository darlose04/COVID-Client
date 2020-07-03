import React from "react";
import { Line, Bar, HorizontalBar } from "react-chartjs-2";

const DailyIncreases = ({ cases, deaths }) => {
  const dateArray = [];
  dateArray.push(Object.keys(cases[0]));

  const chartLabel = dateArray[0].slice(7, dateArray[0].length);

  const infoArray = [];

  for (let i = chartLabel.length - 1; i >= 0; i--) {
    let todayCases = 0;
    let yesterdayCases = 0;

    for (let k = 0; k < cases.length; k++) {
      todayCases += cases[k][`${chartLabel[i]}`];
      yesterdayCases += cases[k][`${chartLabel[i - 1]}`];
    }

    let dailyIncrease = todayCases - yesterdayCases;
    infoArray.push(dailyIncrease);
  }

  console.log(infoArray.reverse());

  const data = {
    labels: chartLabel,
    datasets: [
      {
        label: "Daily Increase in Cases",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(16, 30, 229, 1)",
        borderColor: "rgba(16, 30, 229, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(16, 30, 229, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(16, 30, 229, 1)",
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
      <h1>Charts and stats for daily increases</h1>
      <Line
        data={data}
        options={{ maintainAspectRatio: true }}
        width={830}
        height={490}
      />
      <HorizontalBar
        data={data}
        options={{ maintainAspectRatio: true }}
        width={830}
        height={400}
      />
    </div>
  );
};

export default DailyIncreases;
