import React, { useState, useEffect } from "react";
import axios from "axios";
import CountyList from "./CountyList";

const StateList = ({ stateName, cases, deaths }) => {
  // const [stateCases, setStateCases] = useState([]);
  // const [stateDeaths, setStateDeaths] = useState([]);

  // useEffect(() => {
  //   const getStateData = async () => {
  //     const cases = await axios.get(
  //       `${baseUrl}/coronacases/states/${stateName}`
  //     );
  //     setStateCases(cases.data);
  //     const deaths = await axios.get(
  //       `${baseUrl}/coronadeaths/states/${stateName}`
  //     );
  //     setStateDeaths(deaths.data);
  //   };

  //   getStateData();
  // }, [stateName]);

  /* Sort cases and deaths by stateName here */

  return (
    <div>
      <CountyList />
    </div>
  );
};

export default StateList;
