import React, { useState, useEffect } from "react";
import axios from "axios";
import CountyList from "./CountyList";

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

  return (
    <div>
      {stateCases.length > 0 && stateDeaths.length > 0 ? (
        <CountyList cases={stateCases} deaths={stateDeaths} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default StateList;
