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
          className="github-JHU"
        >
          this Github repository
        </a>{" "}
        created by the Center for Systems Science and Engineering (CSSE) at
        Johns Hopkins University (JHU).
      </p>
    </section>
  );
};

export default About;
