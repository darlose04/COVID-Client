import React from "react";
import numWithCommas from "../../../numWithCommas";

const GlobalTotals = ({ dailyReport, handleChange }) => {
  let totalCases = 0;
  let totalDeaths = 0;
  let totalActive = 0;
  let totalRecovered = 0;

  dailyReport.map((state) => {
    totalCases += state.Confirmed;
    totalDeaths += state.Deaths;
    totalActive += state.Active;
    totalRecovered += state.Recovered;
  });

  return (
    <div className="global-totals">
      <h2 className="Global-Totals" onClick={handleChange}>
        Global Totals
      </h2>
      <ul>
        <li>Confirmed: {numWithCommas(totalCases)}</li>
        <li>Deaths: {numWithCommas(totalDeaths)}</li>
        <li>Active: {numWithCommas(totalActive)}</li>
        <li>Recovered: {numWithCommas(totalRecovered)}</li>
      </ul>
    </div>
  );
};

export default GlobalTotals;
