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
    <div className="data">
      <CDList dailyReport={dailyReport} />
      <Chart cases={cases} deaths={deaths} />
    </div>
  );
};

export default Data;
