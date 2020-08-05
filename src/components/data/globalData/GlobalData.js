import React, { useState, useEffect } from "react";
import axios from "axios";
import Disclaimer from "../../layout/Disclaimer";
import Spinner from "../../layout/Spinner";
import useCountrySelected from "../../../hooks/useCountrySelected";
import CountryList from "./CountryList";
import Chart from "../Chart";
import DailyIncreases from "../DailyIncreases";

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

  let singleCountryCases = [];
  let singleCountryDeaths = [];

  cases.map((obj) => {
    if (obj.Country === countryName) {
      singleCountryCases.push(obj);
    }
  });

  deaths.map((obj) => {
    if (obj.Country === countryName) {
      singleCountryDeaths.push(obj);
    }
  });

  console.log(singleCountryCases);

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
              <div className="charts">
                {countryName === "" ? (
                  <div>
                    <Chart
                      info={cases}
                      label="Total Global Cases"
                      color="rgba(16,30,229,1)"
                    />
                    <Chart
                      info={deaths}
                      label="Total Global Deaths"
                      color="rgba(198,9,9,1)"
                    />
                    <DailyIncreases
                      info={cases}
                      label={"Daily Increase in Global Cases"}
                      color="rgba(16,30,229,1)"
                    />
                    <DailyIncreases
                      info={deaths}
                      label={"Daily Increase in Global Deaths"}
                      color="rgba(198,9,9,1)"
                    />
                  </div>
                ) : (
                  <div>
                    <Chart
                      countryName={countryName}
                      info={singleCountryCases}
                      label={countryName + " Cases"}
                      color="rgba(16,30,229,1)"
                    />
                    <Chart
                      countryName={countryName}
                      info={singleCountryDeaths}
                      label={countryName + " Deaths"}
                      color="rgba(198,9,9,1)"
                    />
                    <DailyIncreases
                      countryName={countryName}
                      info={singleCountryCases}
                      label={"Daily Increase in " + countryName + " Cases"}
                      color="rgba(16,30,229,1)"
                    />
                    <DailyIncreases
                      countryName={countryName}
                      info={singleCountryDeaths}
                      label={"Daily Increase in " + countryName + " Deaths"}
                      color="rgba(198,9,9,1)"
                    />
                  </div>
                )}
              </div>
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
