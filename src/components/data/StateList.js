import React, { useState, useEffect } from "react";
import axios from "axios";

const StateList = ({ stateName, baseUrl }) => {
  const [stateCases, setStateCases] = useState([]);
  const [stateDeaths, setStateDeaths] = useState([]);

  useEffect(() => {
    const getStateData = async () => {
      const cases = await axios.get(
        `${baseUrl}/coronacases/states/${stateName}`
      );
      setStateCases(cases.data);
      const deaths = await axios.get(
        `${baseUrl}/coronadeaths/states/${stateName}`
      );
      setStateDeaths(deaths.data);
    };

    getStateData();
  }, []);

  const dateArray = [];
  const infoArray = [];
  if (stateCases.length > 0 && stateDeaths.length > 0) {
    dateArray.push(Object.keys(stateCases[0]));
    const chartLabel = dateArray[0].slice(7, dateArray[0].length);

    chartLabel.map((date) => {
      let numInfo = 0;
      stateCases.map((item) => {
        numInfo += item[date];
      });
      infoArray.push(numInfo);
    });
  }

  if (dateArray.length > 0) {
    console.log(dateArray[0].slice(7, dateArray[0].length));
  }

  console.log(infoArray);

  return (
    <div>
      <h3>State Counties (If Applicable)</h3>
      <ul></ul>
    </div>
  );
};

export default StateList;
