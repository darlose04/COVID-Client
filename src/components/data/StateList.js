import React from "react";

const StateList = ({ dailyReport }) => {
  return (
    <div>
      <h3>This is where the state list will go</h3>
      <ul>
        {dailyReport.map((item) => (
          <li key={item.index}>{item.Province_State}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateList;
