import React from "react";

const CDList = ({ dailyReport }) => {
  return (
    <div className="state-list">
      <h2>States / Territories</h2>
      <ul>
        {dailyReport.map((item) => (
          <li key={item.index}>
            <h3>{item.Province_State} </h3>
            <p>Cases: {item.Confirmed}</p> <p>Deaths: {item.Deaths}</p>
            <p>Recovered: {item.Recovered}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CDList;
