import React from "react";
import Totals from "./Totals";
import numWithCommas from "../../numWithCommas";

const CDList = ({ dailyReport, handleChange }) => {
  return (
    <div className="list-data">
      <Totals dailyReport={dailyReport} handleChange={handleChange} />
      <div className="state-list">
        <h2>States / Territories</h2>
        <ul>
          {dailyReport.map((item) => {
            let numCases = item.Confirmed;
            let numDeaths = item.Deaths;
            let numRecovered = item.Recovered;

            return (
              <li key={item.index}>
                <h3 onClick={handleChange}>{item.Province_State}</h3>
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

export default CDList;
