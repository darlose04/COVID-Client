import React, { useState, useEffect } from "react";
import axios from "axios";
import Disclaimer from "../../layout/Disclaimer";
import Spinner from "../../layout/Spinner";
import useStateSelected from "../../../hooks/useStateSelected";

const baseUrl = "https://www.cov-api.com/api/global";

const GlobalData = () => {
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [dailyReport, setDailyReport] = useState([]);
  const [stateName, handleChange] = useStateSelected("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const caseRequests = await axios.get(`${baseUrl}/coronacases`);
      setCases(caseRequests.data);
      const deathRequests = await axios.get(`${baseUrl}/coronadeaths`);
      setDeaths(deathRequests.data);
      const dailyReport = await axios.get(`${baseUrl}/dailyreport`);
      setDailyReport(dailyReport.data);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="data-wrapper">
      <Disclaimer />
    </div>
  );
};

export default GlobalData;
