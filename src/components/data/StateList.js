import React from "react";

const StateList = ({ dailyReport }) => {
  return (
    <div>
      <h3>State Counties (If Applicable)</h3>
      <ul>
        {dailyReport.map((item) => (
          <li key={item.index}>{item.Province_State}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateList;
