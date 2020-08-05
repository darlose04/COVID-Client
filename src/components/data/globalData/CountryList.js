import React from "react";
import GlobalTotals from "./GlobalTotals";
import numWithCommas from "../../../numWithCommas";

const CountryList = ({ dailyReport, handleChange }) => {
  // create array to store arrays of country objects
  // every object with the same Country_Region is in the same array
  let countryArr = [];

  for (let i = 0; i < dailyReport.length; i++) {
    if (!countryArr.includes(dailyReport[i].Country_Region)) {
      countryArr.push(dailyReport[i].Country_Region);
    }
  }

  let countryStats = [];

  countryArr.map((country) => {
    let singleCountryStats = [];
    dailyReport.map((obj) => {
      if (obj.Country_Region === country) {
        singleCountryStats.push(obj);
      }
    });

    countryStats.push(singleCountryStats);
  });

  // map through countryStats array, create a new object that sums the stats for each country
  // push that object into a new array in order to have an array with all the country stats summed for each country
  let countryObjArr = [];

  countryStats.map((item) => {
    let countryTotalsObj = {
      Country_Region: item[0].Country_Region,
      Confirmed: 0,
      Deaths: 0,
      Recovered: 0,
    };

    item.map((itemObj) => {
      (countryTotalsObj.Confirmed += itemObj.Confirmed),
        (countryTotalsObj.Deaths += itemObj.Deaths),
        (countryTotalsObj.Recovered += itemObj.Recovered);
    });

    countryObjArr.push(countryTotalsObj);
  });

  console.log(countryObjArr);

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
