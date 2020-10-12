import React, { useState, useEffect } from "react";
import axios from "axios";
import Disclaimer from "../../layout/Disclaimer";
import Spinner from "../../layout/Spinner";
import CDList from "./CDList";
import CountyList from "./CountyList";
import Chart from "../Chart";
import StateBarChart from "./StateBarChart";
import DailyIncreases from "../DailyIncreases";
// import StateAPIRequest from "./StateAPIRequest";
import useStateSelected from "../../../hooks/useStateSelected";

const baseUrl = "https://www.cov-api.com/api/usa";

const Data = () => {
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [dailyReport, setDailyReport] = useState([]);
  const [stateName, handleChange] = useStateSelected("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const caseRequests = await axios.get(`${baseUrl}/coronacases`);
      // const caseRequests = await axios.get(
      //   "http://localhost:4100/api/usa/coronacases"
      // );
      // console.log(caseRequests);
      setCases(caseRequests.data);
      const deathRequests = await axios.get(`${baseUrl}/coronadeaths`);
      // const deathRequests = await axios.get(
      //   "http://localhost:4100/api/usa/coronadeaths"
      // );
      setDeaths(deathRequests.data);
      const dailyReport = await axios.get(`${baseUrl}/dailyreport`);
      // const dailyReport = await axios.get(
      // "http://localhost:4100/api/usa/dailyreport"
      // );
      // console.log(dailyReport);
      setDailyReport(dailyReport.data);
      setLoading(false);
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

  return (
    <div className="data-wrapper">
      <Disclaimer />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {cases.length > 0 && deaths.length > 0 ? (
            <div className="data">
              <CDList handleChange={handleChange} dailyReport={dailyReport} />
              <div className="charts">
                {stateName === "" ? (
                  <div>
                    <Chart
                      info={cases}
                      label="Total U.S. Cases"
                      color="rgba(16,30,229,1)"
                    />
                    <Chart
                      info={deaths}
                      label="Total U.S. Deaths"
                      color="rgba(198,9,9,1)"
                    />
                    <DailyIncreases
                      info={cases}
                      label={"Daily Increase in U.S. Cases"}
                      color="rgba(16,30,229,1)"
                    />
                    <DailyIncreases
                      info={deaths}
                      label={"Daily Increase in U.S. Deaths"}
                      color="rgba(198,9,9,1)"
                    />
                  </div>
                ) : (
                  <div>
                    <Chart
                      stateName={stateName}
                      info={stateCountyCasesArr}
                      label={stateName + " Cases"}
                      color="rgba(16,30,229,1)"
                    />
                    <Chart
                      stateName={stateName}
                      info={stateCountyDeathsArr}
                      label={stateName + " Deaths"}
                      color="rgba(198,9,9,1)"
                    />
                    <DailyIncreases
                      stateName={stateName}
                      info={stateCountyCasesArr}
                      label={"Daily Increase in " + stateName + " Cases"}
                      color="rgba(16,30,229,1)"
                    />
                    <DailyIncreases
                      stateName={stateName}
                      info={stateCountyDeathsArr}
                      label={"Daily Increase in " + stateName + " Deaths"}
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
                      related to that state's counties.
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <StateBarChart dailyReport={dailyReport} />
        </div>
      )}
    </div>
  );
};

export default Data;
