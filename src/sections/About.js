import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { useTranslation } from "react-i18next";
import Cv from "../components/Cv";

const About = () => {
  const { t } = useTranslation();
  const [showCv, setShowCv] = useState(false);

  const handleCvOptVisibility = () => {
    setShowCv(!showCv);
  };

  const randomFact = {
    num: Math.floor(Math.random() * 300),
    fact: Math.floor(Math.random() * 3)
  };

  return (
    <div id="about" className="offset about-page">
      <div className="d-flex align-items-center">
        <div className="text-center p-3 ">
          <div className="d-flex flex-column flex-md-row align-items-center mb-4">
            <div>
              <picture>
                <source srcset="img/portrait.webp" type="image/webp" />
                <source srcset="img/portrait.png" type="image/png" />
                <img
                  src="img/portrait.png"
                  className="about-page__avatar mb-3 mr-md-4"
                  alt="Portrait"
                />
              </picture>
            </div>
            <Card className="about-page__card mb-3 mb-md-0 px-3 px-md-5 py-3">
              <h1 className="about-page__title mt-3 mb-4 text-uppercase">
                {t("about.header")}
              </h1>
              <p className="about-page__description lead">
                {t("about.description")}
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
            {t("about.randomFact")} #{randomFact.num}:{" "}
            {t(`about.facts.${randomFact.fact}`)}
          </p>
        </div>
      </div>
      <div className="text-center">
        <hr className="socket" />
        <p>&copy; Patrycja Adamczyk, 2019</p>
      </div>
    </div>
  );
};

export default About;
