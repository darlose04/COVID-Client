import React from "react";

const StateBarChart = ({ dailyReport }) => {
  const statesArr = [];
  const casesArr = [];
  const deathsArr = [];
  console.log(dailyReport);

  dailyReport.map((report) => {
    statesArr.push(report.Province_State);
    casesArr.push(report.Confirmed);
    deathsArr.push(report.Deaths);
  });

  console.log(statesArr);

  return (
    <div>
      <h1>There will be a bar chart of state data here</h1>
    </div>
  );
};

export default StateBarChart;
