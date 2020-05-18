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

  const numWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="list-data">
      <div className="totals">
        <h2>U.S. Totals</h2>
        <ul>
          <li>Confirmed: {numWithCommas(totalCases)}</li>
          <li>Deaths: {numWithCommas(totalDeaths)}</li>
          <li>Active: {numWithCommas(totalActive)}</li>
          <li>Hospitalized: {numWithCommas(totalHospitalized)}</li>
          <li>Tested: {numWithCommas(totalTested)}</li>
          <li>Recovered: {numWithCommas(totalRecovered)}</li>
        </ul>
      </div>
      <div className="state-list">
        <h2>States / Territories</h2>
        <ul>
          {dailyReport.map((item) => {
            let numCases = item.Confirmed;
            let numDeaths = item.Deaths;
            let numRecovered = item.Recovered;
            console.log(typeof numCases);

            return (
              <li key={item.index}>
                <h3>{item.Province_State}</h3>
                <p>Cases: {numWithCommas(numCases)}</p>{" "}
                <p>Deaths: {numWithCommas(numDeaths)}</p>
                {numRecovered ? (
                  <p>Recovered: {numWithCommas(numRecovered)}</p>
                ) : (
                  <p>Recovered: {item.Recovered}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CDList;
