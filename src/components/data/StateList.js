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
  }, [stateName]);

  console.log(stateName);
  console.log(stateCases);

  return (
    <div>
      <h3>State Counties (If Applicable)</h3>
      <ul></ul>
    </div>
  );
};

export default StateList;
