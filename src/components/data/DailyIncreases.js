import React from "react";

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

  console.log(infoArray);

  return (
    <div>
      <h1>Charts and stats for daily increases</h1>
    </div>
  );
};

export default DailyIncreases;
