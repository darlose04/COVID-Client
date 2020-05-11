import React from "react";

const CDList = ({ dailyReport }) => {
  return (
    <div>
      <h3>States / Territories</h3>
      <ul>
        {dailyReport.map((item) => (
          <li key={item.index}>
            {item.Province_State} <p>Cases: {item.Confirmed}</p>{" "}
            <p>Deaths: {item.Deaths}</p>
            <p>Recovered: {item.Recovered}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CDList;
