import React, { useState, useEffect } from "react";
import axios from "axios";
import Disclaimer from "../layout/Disclaimer";
import CDList from "./CDList";
import StateList from "./StateList";
import Chart from "./Chart";
import ReChart from "./ReChart";

const baseUrl = "https://www.cov-api.com/api/usa";

const Data = () => {
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [dailyReport, setDailyReport] = useState([]);

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

  return (
    <div className="data-wrapper">
      {cases.length > 0 && deaths.length > 0 ? (
        <div className="data">
          <Disclaimer />
          <CDList dailyReport={dailyReport} />
          <div className="charts">
            {/* <Chart info={cases} label="Cases" color="rgba(16,30,229,1)" /> */}
            {/* <Chart info={deaths} label="Deaths" color="rgba(198,9,9,1)" /> */}
            <ReChart
              info={cases}
              value="Confirmed Cases"
              color="rgba(16,30,229,1)"
            />
            <ReChart info={deaths} value="Deaths" color="rgba(198,9,9,1)" />
          </div>
          <div className="filler">
            <StateList dailyReport={dailyReport} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Data;
