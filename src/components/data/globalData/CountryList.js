import React from "react";
import GlobalTotals from "./GlobalTotals";
import numWithCommas from "../../../numWithCommas";

const CountryList = ({ dailyReport, handleChange }) => {
  return (
    <div className="list-data">
      <GlobalTotals dailyReport={dailyReport} handleChange={handleChange} />
      <div className="state-list">
        <h2>Countries</h2>
      </div>
    </div>
  );
};

export default CountryList;
