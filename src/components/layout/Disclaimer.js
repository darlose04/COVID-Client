import React from "react";

const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <h1>THE INFORMATION PRESENTED HERE IS NOT UP TO DATE!</h1>
      <h3>
        In order to get more recent statistics, visit this link:{" "}
        <a
          href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
          target="_blank"
          rel="noopener noreferrer"
        >
          COVID-19 Dashboard by the Center for Systems Science and Engineering
          (CSSE) at Johns Hopkins University (JHU)
        </a>
        .
      </h3>
    </div>
  );
};

export default Disclaimer;
