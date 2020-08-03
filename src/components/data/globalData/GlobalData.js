import React, { useState, useEffect } from "react";
import axios from "axios";
import Disclaimer from "../../layout/Disclaimer";
import Spinner from "../../layout/Spinner";
import useStateSelected from "../../../hooks/useStateSelected";

const baseUrl = "https://www.cov-api.com/api/global";

const GlobalData = () => {
  return (
    <div className="data-wrapper">
      <Disclaimer />
    </div>
  );
};

export default GlobalData;
