import React, { useState, useEffect } from "react";
import axios from "axios";
import StateList from "./StateList";

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
    <div>
      <StateList dailyReport={dailyReport} />
    </div>
  );
};

export default Data;
