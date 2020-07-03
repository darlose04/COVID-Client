import React from "react";

const DailyIncreases = ({ cases, deaths }) => {
  const dateArray = [];
  dateArray.push(Object.keys(cases[0]));

  const chartLabel = dateArray[0].slice(7, dateArray[0].length);

  return (
    <div>
      <h1>Charts and stats for daily increases</h1>
    </div>
  );
};

export default DailyIncreases;
