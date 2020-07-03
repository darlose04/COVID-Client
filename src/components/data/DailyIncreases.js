import React from "react";
import { Line, Bar, HorizontalBar } from "react-chartjs-2";

const DailyIncreases = ({ info, label, color }) => {
  const dateArray = [];
  dateArray.push(Object.keys(info[0]));

  const chartLabel = dateArray[0].slice(7, dateArray[0].length);

  const infoArray = [];

  for (let i = chartLabel.length - 1; i >= 0; i--) {
    let todayNums = 0;
    let yesterdayNums = 0;

    for (let k = 0; k < info.length; k++) {
      todayNums += info[k][`${chartLabel[i]}`];
      yesterdayNums += info[k][`${chartLabel[i - 1]}`];
    }

    let dailyIncrease = todayNums - yesterdayNums;
    infoArray.push(dailyIncrease);
  }

  console.log(infoArray.reverse());

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
    <div className="daily-increases">
      <Line
        data={data}
        options={{ maintainAspectRatio: true }}
        width={830}
        height={490}
      />
    </div>
  );
};

export default DailyIncreases;
