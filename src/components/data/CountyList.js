import React from "react";

const CountyList = ({ cases, deaths }) => {
  let stateObjects = [];

  const dateArray = [];
  dateArray.push(Object.keys(cases[0]));
  const dates = dateArray[0].slice(7, dateArray[0].length);

  const recentDate = dates[dates.length - 1];

  for (let i = 0; i < cases.length - 2; i++) {
    let stateObj = {
      county: cases[i].County,
      cases: cases[i][recentDate],
      deaths: deaths[i][recentDate],
    };

    stateObjects.push(stateObj);
  }

  // console.log(stateObjects);

  return (
    <div>
      <h3>State Counties (If Applicable)</h3>
      <ul></ul>
    </div>
  );
};

export default CountyList;
