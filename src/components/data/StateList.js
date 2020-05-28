import React, { useState, useEffect } from "react";
import axios from "axios";
import CountyList from "./CountyList";

const StateList = ({ stateName, cases, deaths }) => {
  /* Sort cases and deaths by stateName here */

  let stateCountyCasesArr = [];
  let stateCountyDeathsArr = [];

  cases.map((obj) => {
    if (obj.State === stateName) {
      stateCountyCasesArr.push(obj);
    }
  });

  deaths.map((obj) => {
    if (obj.State === stateName) {
      stateCountyDeathsArr.push(obj);
    }
  });

  return (
    <div>
      <CountyList
        stateName={stateName}
        cases={stateCountyCasesArr}
        deaths={stateCountyDeathsArr}
      />
    </div>
  );
};

export default StateList;
