import React, { useState, useEffect } from "react";
import axios from "axios";
import CDList from "./CDList";
import Chart from "./Chart";
import "./Data.css";

const Data = () => {
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [dailyReport, setDailyReport] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const cases = await axios.get(
        "http://localhost:4000/api/usa/coronacases"
      );
      setCases(cases.data);
      const deaths = await axios.get(
        "http://localhost:4000/api/usa/coronadeaths"
      );
      setDeaths(deaths.data);
      const dailyReport = await axios.get(
        "http://localhost:4000/api/usa/dailyreport"
      );
      setDailyReport(dailyReport.data);
    };

    getData();
  }, []);

  return (
    <div>
      {cases.length > 0 && deaths.length > 0 ? (
        <div className="data">
          <div className="state-stats">
            <CDList dailyReport={dailyReport} />
          </div>
          <div className="charts">
            <Chart
              className="chart"
              info={cases}
              label="Cases"
              color="rgba(16,30,229,1)"
            />
            <Chart
              className="chart"
              info={deaths}
              label="Deaths"
              color="rgba(198,9,9,1)"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Data;
