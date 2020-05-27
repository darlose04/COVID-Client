import React from "react";

const CountyList = ({ cases, deaths }) => {
  let stateObjects = [];

  const dateArray = [];
  dateArray.push(Object.keys(cases[0]));
  const dates = dateArray[0].slice(7, dateArray[0].length);

  const recentDate = dates[dates.length - 1];

  let listLength = 0;
  while (listLength < cases.length) {
    let stateObj = {
      county: "",
      cases: "",
      deaths: "",
    };

    cases.map((county) => {
      stateObj.county = county.County;
      stateObj.cases = county[recentDate];
    });

    deaths.map((county) => {
      stateObj.deaths = county[recentDate];
    });

    stateObjects.push(stateObj);

    listLength++;
  }
  console.log(stateObjects);

  return (
    <div>
      <h3>State Counties (If Applicable)</h3>
      <ul></ul>
    </div>
  );
};

export default CountyList;
