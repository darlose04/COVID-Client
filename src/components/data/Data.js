import React, { useState, useEffect } from "react";
import axios from "axios";
import CDList from "./CDList";
import StateList from "./StateList";
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
    <div className="data-wrapper">
      {cases.length > 0 && deaths.length > 0 ? (
        <div className="data">
          <CDList dailyReport={dailyReport} />
          <div className="charts">
            <Chart info={cases} label="Cases" color="rgba(16,30,229,1)" />
            <Chart info={deaths} label="Deaths" color="rgba(198,9,9,1)" />
          </div>
          <StateList dailyReport={dailyReport} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Data;
