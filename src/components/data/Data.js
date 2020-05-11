import React, { useState, useEffect } from "react";
import axios from "axios";
import CDList from "./CDList";
import Chart from "./Chart";
import "./Data.css";

const Data = () => {
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [dailyReport, setDailyReport] = useState([]);

  const getCases = async () => {
    const res = await axios.get("http://localhost:4000/api/usa/coronacases");
    setCases(res.data);
  };

  const getDeaths = async () => {
    const res = await axios.get("http://localhost:4000/api/usa/coronadeaths");
    setDeaths(res.data);
  };

  const getDailyReport = async () => {
    const res = await axios.get("http://localhost:4000/api/usa/dailyreport");
    setDailyReport(res.data);
  };

  useEffect(() => {
    getCases();
  }, []);

  useEffect(() => {
    getDeaths();
  }, []);

  useEffect(() => {
    getDailyReport();
  }, []);

  return (
    <div className="data">
      <CDList dailyReport={dailyReport} />
      <Chart cases={cases} deaths={deaths} />
    </div>
  );
};

export default Data;
