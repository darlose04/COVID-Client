import React from "react";
import spinner from "./Spin-1s-200px.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="Loading Gif" />
    </div>
  );
};

export default Spinner;
