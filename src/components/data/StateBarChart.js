import React from "react";
import { HorizontalBar } from "react-chartjs-2";

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

  const data = {
    labels: statesArr,
    datasets: [
      {
        label: "Cases",
        backgroundColor: "rgba(101,149,247,0.3)",
        borderColor: "rgba(16,30,229,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(101,149,247,0.5)",
        hoverBorderColor: "rgba(16,30,229,1)",
        data: casesArr,
      },
      {
        label: "Deaths",
        backgroundColor: "rgba(239,107,109,0.2)",
        borderColor: "rgba(198,9,9,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(239,107,109,0.5)",
        hoverBorderColor: "rgba(198,9,9,1)",
        data: deathsArr,
      },
    ],
  };

  return (
    <div className="state-bar-chart">
      <HorizontalBar data={data} height={270} />
    </div>
  );
};

export default StateBarChart;
