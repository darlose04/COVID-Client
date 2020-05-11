import React, { useState, useEffect } from "react";
import axios from "axios";
import StateList from "./StateList";
import "./Data.css";

const Data = () => {
  const [data, setData] = useState([]);
  const [dailyReport, setDailyReport] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:4000/api/usa/coronacases");
    setData(res.data);
  };

  const getDailyReport = async () => {
    const res = await axios.get("http://localhost:4000/api/usa/dailyreport");
    setDailyReport(res.data);
  };

  useEffect(() => {
    getDailyReport();
  }, []);

  return (
    <div className="data">
      <StateList dailyReport={dailyReport} />
      <StateList dailyReport={dailyReport} />
      <StateList dailyReport={dailyReport} />
    </div>
  );
};

export default Data;
