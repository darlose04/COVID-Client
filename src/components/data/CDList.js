import React from "react";

const CDList = ({ dailyReport }) => {
  return (
    <div>
      <h3>States / Territories</h3>
      <ul>
        {dailyReport.map((item) => (
          <li key={item.index}>{item.Province_State}</li>
        ))}
      </ul>
    </div>
  );
};

export default CDList;
