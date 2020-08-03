import React from "react";
import GlobalTotals from "./GlobalTotals";
import numWithCommas from "../../../numWithCommas";

const CountryList = ({ dailyReport, handleChange }) => {
  return (
    <div className="list-data">
      <GlobalTotals dailyReport={dailyReport} handleChange={handleChange} />
      <div className="state-list">
        <h2>Countries</h2>
        <ul>
          {dailyReport.map((item) => {
            let numCases = item.Confirmed;
            let numDeaths = item.Deaths;
            let numRecovered = item.Recovered;

            return (
              <li key={item.index}>
                <h3>{item.Country_Region}</h3>
                <p>Cases: {numWithCommas(numCases)}</p>
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

export default CountryList;
