import React from "react";
import Card from "@material-ui/core/Card";
import { useTranslation } from "react-i18next";

const SkillsList = ({ showSkillsList }) => {
  const { t } = useTranslation();
  return (
    <div className="cover-page skills-list offset" onClick={showSkillsList}>
      <Card className="skills-list__card px-2 py-3 my-2">
        <div className="skills-list__container text-center">
          <h1 className="skills__title text-uppercase text-turq-med">
            {t("skills.title")}
          </h1>
          <hr className="skills__hr" />
          <div className="d-flex flex-column flex-md-row justify-content-around">
            <div>
              <h2 className="skills-list__subtitle text-uppercase">
                {t("skills.programming")}
              </h2>
              <ul className="skills-list__list ">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Firebase</li>
                <li>Webpack</li>
                <li>Jest</li>
                <li>Enzyme</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div>
              <h2 className="skills-list__subtitle text-uppercase">Design</h2>
              <ul className="skills-list__list">
                <li>Inkscape</li>
                <li>Figma</li>
                <li>Material Design</li>
                <li>Photoshop</li>
                <li>Procreate</li>
              </ul>
            </div>
            <div>
              <h2 className="skills-list__subtitle text-uppercase">
                {t("skills.learning")}
              </h2>
              <ul className="skills-list__list">
                <li>React-bootstrap</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SkillsList;
