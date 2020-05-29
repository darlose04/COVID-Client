import React, { useState, useEffect } from "react";
import axios from "axios";
import Disclaimer from "../layout/Disclaimer";
import CDList from "./CDList";
import CountyList from "./CountyList";
import Chart from "./Chart";
import useStateSelected from "../../hooks/useStateSelected";

const baseUrl = "https://www.cov-api.com/api/usa";

const Data = () => {
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [dailyReport, setDailyReport] = useState([]);
  const [stateName, handleChange] = useStateSelected("");

  useEffect(() => {
    const getData = async () => {
      const cases = await axios.get(`${baseUrl}/coronacases`);
      setCases(cases.data);
      const deaths = await axios.get(`${baseUrl}/coronadeaths`);
      setDeaths(deaths.data);
      const dailyReport = await axios.get(`${baseUrl}/dailyreport`);
      setDailyReport(dailyReport.data);
    };

    getData();
  }, []);

  /* Sort cases and deaths by stateName here to pass to StateList, CountyList, and StateChart components*/

  let stateCountyCasesArr = [];
  let stateCountyDeathsArr = [];

  cases.map((obj) => {
    if (obj.State === stateName) {
      stateCountyCasesArr.push(obj);
    }
  });

  deaths.map((obj) => {
    if (obj.State === stateName) {
      stateCountyDeathsArr.push(obj);
    }
  });

  // removing the "Unassigned" and "Out of 'State'" county values from each state
  stateCountyCasesArr.pop();
  stateCountyCasesArr.pop();
  stateCountyDeathsArr.pop();
  stateCountyDeathsArr.pop();

  return (
    <div className="data-wrapper">
      {cases.length > 0 && deaths.length > 0 ? (
        <div className="data">
          <Disclaimer />
          <CDList handleChange={handleChange} dailyReport={dailyReport} />
          <div className="charts">
            {stateName === "" ? (
              <div>
                <Chart info={cases} label="Cases" color="rgba(16,30,229,1)" />
                <Chart info={deaths} label="Deaths" color="rgba(198,9,9,1)" />
              </div>
            ) : (
              <div>
                <Chart
                  info={stateCountyCasesArr}
                  label={stateName + " Cases"}
                  color="rgba(16,30,229,1)"
                />
                <Chart
                  info={stateCountyDeathsArr}
                  label={stateName + " Deaths"}
                  color="rgba(198,9,9,1)"
                />
              </div>
            )}
          </div>
          <div className="county-list">
            {stateName !== "" ? (
              <CountyList
                stateName={stateName}
                cases={stateCountyCasesArr}
                deaths={stateCountyDeathsArr}
              />
            ) : (
              <div>
                <h3>
                  Click on a state name to the left to display statistics
                  related to that state's counties
                </h3>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Data;
