import React from "react";
import spinner from "./Spin-1s-200px.gif";

const Spinner = () => {
  return (
    <div>
      <h1>Loading Data...</h1>
      <img src={spinner} alt="Loading Gif" />
    </div>
  );
};

export default Spinner;
