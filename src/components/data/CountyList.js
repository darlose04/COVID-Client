import React from "react";

const CountyList = ({ stateName, cases, deaths }) => {
  const numWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  let stateObjects = [];

  const dateArray = [];
  dateArray.push(Object.keys(cases[0]));
  const dates = dateArray[0].slice(7, dateArray[0].length);

  const recentDate = dates[dates.length - 1];

  for (let i = 0; i < cases.length - 2; i++) {
    let stateObj = {
      county: cases[i].County,
      cases: numWithCommas(cases[i][recentDate]),
      deaths: numWithCommas(deaths[i][recentDate]),
    };

    stateObjects.push(stateObj);
  }

  // console.log(stateObjects);

  return (
    <div>
      <h1>{stateName}</h1>
      <ul>
        {stateObjects.map((county) => (
          <li>
            <h3>{county.county}</h3>
            <p>Cases: {county.cases}</p>
            <p>Deaths: {county.deaths}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountyList;
