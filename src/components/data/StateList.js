import React, { useState, useEffect } from "react";
import axios from "axios";

const StateList = ({ stateName, cases, deaths }) => {
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
