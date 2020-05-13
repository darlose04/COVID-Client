import React from "react";

const CDList = ({ dailyReport }) => {
  let totalCases = 0;
  let totalDeaths = 0;
  let totalActive = 0;
  let totalHospitalized = 0;
  let totalTested = 0;
  let totalRecovered = 0;

  dailyReport.map((state) => {
    totalCases += state.Confirmed;
    totalDeaths += state.Deaths;
    totalActive += state.Active;
    totalHospitalized += state.People_Hospitalized;
    totalTested += state.People_Tested;
    totalRecovered += state.Recovered;
  });

  return (
    <div>
      <div className="totals">
        <h2>U.S. Totals</h2>
        <ul>
          <li>Confirmed: {totalCases}</li>
          <li>Deaths: {totalDeaths}</li>
          <li>Active: {totalActive}</li>
          <li>Hospitalized: {totalHospitalized}</li>
          <li>Tested: {totalTested}</li>
          <li>Recovered: {totalRecovered}</li>
        </ul>
      </div>
      <div className="state-list">
        <h2>States / Territories</h2>
        <ul>
          {dailyReport.map((item) => (
            <li key={item.index}>
              <h3>{item.Province_State} </h3>
              <p>Cases: {item.Confirmed}</p> <p>Deaths: {item.Deaths}</p>
              <p>Recovered: {item.Recovered}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CDList;
