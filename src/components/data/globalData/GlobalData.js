import React, { useState, useEffect } from "react";
import axios from "axios";
import Disclaimer from "../../layout/Disclaimer";
import Spinner from "../../layout/Spinner";

const GlobalData = () => {
  return (
    <div className="data-wrapper">
      <Disclaimer />
    </div>
  );
};

export default GlobalData;
