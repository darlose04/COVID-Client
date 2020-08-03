import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <h1>ABOUT</h1>
      <p>
        The information presented on this site is not intended to be used for
        medical advice or guidance. The data used is open source, provided by{" "}
        <a
          href="https://github.com/CSSEGISandData/COVID-19"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link"
        >
          this Github repository
        </a>{" "}
        created by the Center for Systems Science and Engineering (CSSE) at
        Johns Hopkins University (JHU).
      </p>
      <br />
      <p>
        The information provided by JHU is gathered from multiple public sources
        that do not always agree on the statistics. Differences in data and
        numbers is encountered across many different sites that provide data
        related to COVID-19. Visiting the Github link above will provide
        information regarding the different sources that JHU gathers data from.
      </p>
      <br />
      <p>
        This site uses a public API (
        <a
          href="https://www.cov-api.com/"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.cov-api.com/
        </a>
        ) to access the data gathered by JHU. The data provided by the API comes
        from the Daily Report and Time Series directories in the JHU Github
        repository. There are some differences in statistics that are presented
        here. For example, the Daily Report information is displayed in the
        States / Territories list, while information for the charts is gathered
        from the Time Series directories. In some cases the numbers do not
        exactly line up. This is due to differences between the two directories
        regarding available data .
      </p>
    </section>
  );
};

export default About;
