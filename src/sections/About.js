import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Cv from "../components/Cv";

const randomFacts = [
  "I like cats",
  "Fan of Star Trek",
  "In free time I paint and draw",
  "I have 464 color pencils"
];
const About = () => {
  const [showCv, setShowCv] = useState(false);

  const handleCvOptVisibility = () => {
    setShowCv(!showCv);
  };

  const randomFact = {
    num: Math.floor(Math.random() * 300),
    fact: randomFacts[Math.floor(Math.random() * randomFacts.length)]
  };

  return (
    <div id="about" className="offset about-page">
      <div className="d-flex align-items-center">
        <div className="text-center p-3 ">
          <div className="d-flex flex-column flex-md-row align-items-center mb-4">
            <div>
              <img
                src="img/portrait.png"
                className="about-page__avatar mb-3 mr-md-4"
                alt="Portrait"
              />
            </div>
            <Card className="about-page__card mb-3 mb-md-0 px-3 px-md-5 py-3">
              <h1 className="about-page__title mt-3 mb-4 text-uppercase">
                Get to know me!
              </h1>
              <p className="about-page__description lead">
                I am a front-end developer, mostly programming in React. All
                websites I work on are responsive. I pay strong attention to the
                code quality and trying to improve it continuously. Besides
                programming I am interested in graphic design, designing
                websites, in UX and UI. I am looking for a job that will allow
                me to develop and improve my programming skills.
              </p>
            </Card>
          </div>

          <Button
            onClick={handleCvOptVisibility}
            variant="contained"
            color="primary"
            className="about-page__button"
          >
            <span className="d-md-none">CV</span>
            <span className="d-none d-md-inline">Curriculum Vitae</span>
          </Button>

          {showCv ? <Cv hideCv={handleCvOptVisibility} /> : ""}

          <p className="small text-med-leg font-italic mt-5">
            Random fact about me #{randomFact.num}: {randomFact.fact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
