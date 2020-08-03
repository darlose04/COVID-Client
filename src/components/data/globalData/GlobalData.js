import React, { useState, useEffect } from "react";
import axios from "axios";
import Disclaimer from "../../layout/Disclaimer";
import Spinner from "../../layout/Spinner";
import useCountrySelected from "../../../hooks/useCountrySelected";
import CountryList from "./CountryList";

const baseUrl = "https://www.cov-api.com/api/global";

const GlobalData = () => {
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [dailyReport, setDailyReport] = useState([]);
  const [countryName, handleChange] = useCountrySelected("");
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
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {cases.length > 0 && deaths.length > 0 ? (
            <div className="data">
              <CountryList
                handleChange={handleChange}
                dailyReport={dailyReport}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalData;
