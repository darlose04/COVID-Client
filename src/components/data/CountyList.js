import React from "react";
import numWithCommas from "../../numWithCommas";

const CountyList = ({ stateName, cases, deaths }) => {
  let stateObjects = [];

  const dateArray = [];
  dateArray.push(Object.keys(cases[0]));
  const dates = dateArray[0].slice(7, dateArray[0].length);

  const recentDate = dates[dates.length - 1];

  for (let i = 0; i < cases.length - 2; i++) {
    let stateObj = {
      id: cases[i].UID,
      county: cases[i].County,
      cases: numWithCommas(cases[i][recentDate]),
      deaths: numWithCommas(deaths[i][recentDate]),
    };

    stateObjects.push(stateObj);
  }

  return (
    <div>
      <h1>{stateName}</h1>
      <ul>
        {stateObjects.map((county) => (
          <li key={county.id}>
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
