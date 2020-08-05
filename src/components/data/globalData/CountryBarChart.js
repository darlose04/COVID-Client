import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const StateBarChart = ({ dailyReport }) => {
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
  let indexCounter = 0;
  countryStats.map((item) => {
    let countryTotalsObj = {
      Country_Region: item[0].Country_Region,
      Confirmed: 0,
      Deaths: 0,
      Recovered: 0,
      Index: indexCounter++,
    };

    item.map(
      (itemObj) => (
        (countryTotalsObj.Confirmed += itemObj.Confirmed),
        (countryTotalsObj.Deaths += itemObj.Deaths),
        (countryTotalsObj.Recovered += itemObj.Recovered)
      )
    );

    countryObjArr.push(countryTotalsObj);
  });

  countryObjArr.sort((a, b) => {
    return a.Country_Region < b.Country_region
      ? -1
      : a.Country_Region > b.Country_Region
      ? 1
      : 0;
  });

  const countryNames = [];
  const countryCases = [];
  const countryDeaths = [];

  countryObjArr.map((report) => {
    countryNames.push(report.Country_Region);
    countryCases.push(report.Confirmed);
    countryDeaths.push(report.Deaths);
  });

  const data = {
    labels: countryNames,
    datasets: [
      {
        label: "Cases",
        backgroundColor: "rgba(101,149,247,0.3)",
        borderColor: "rgba(16,30,229,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(101,149,247,0.5)",
        hoverBorderColor: "rgba(16,30,229,1)",
        data: countryCases,
      },
      {
        label: "Deaths",
        backgroundColor: "rgba(239,107,109,0.2)",
        borderColor: "rgba(198,9,9,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(239,107,109,0.5)",
        hoverBorderColor: "rgba(198,9,9,1)",
        data: countryDeaths,
      },
    ],
  };

  return (
    <div className="state-bar-chart">
      <HorizontalBar data={data} height={600} />
    </div>
  );
};

export default StateBarChart;
