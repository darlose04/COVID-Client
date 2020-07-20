import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";
import Chart from "./Chart";
import DailyIncreases from "./DailyIncreases";

const baseUrl = "https://www.cov-api.com/api/usa";

const StateAPIRequest = ({ stateName }) => {
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const caseRequests = await axios.get(
        `${baseUrl}/coronacases/states/${stateName}`
      );
      setCases(caseRequests.data);
      const deathRequests = await axios.get(
        `${baseUrl}/coronadeaths/states/${stateName}`
      );
      setDeaths(deathRequests.data);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div>
      <Chart
        info={cases}
        label={stateName + " Cases"}
        color="rgba(16,30,229,1)"
      />
      <Chart
        info={deaths}
        label={stateName + " Deaths"}
        color="rgba(198,9,9,1)"
      />
      <DailyIncreases
        info={cases}
        label={"Daily Increase in " + stateName + " Cases"}
        color="rgba(16,30,229,1)"
      />
      <DailyIncreases
        info={deaths}
        label={"Daily Increase in " + stateName + " Deaths"}
        color="rgba(198,9,9,1)"
      />
    </div>
  );
};

export default StateAPIRequest;
