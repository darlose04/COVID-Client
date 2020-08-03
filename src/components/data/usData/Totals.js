import React from "react";
import numWithCommas from "../../../numWithCommas";

const Totals = ({ dailyReport, handleChange }) => {
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
    <div className="totals">
      <h2 className="US-Totals" onClick={handleChange}>
        U.S. Totals
      </h2>
      <ul>
        <li>Confirmed: {numWithCommas(totalCases)}</li>
        <li>Deaths: {numWithCommas(totalDeaths)}</li>
        <li>Active: {numWithCommas(totalActive)}</li>
        <li>Hospitalized: {numWithCommas(totalHospitalized)}</li>
        <li>Tested: {numWithCommas(totalTested)}</li>
        <li>Recovered: {numWithCommas(totalRecovered)}</li>
      </ul>
    </div>
  );
};

export default Totals;
