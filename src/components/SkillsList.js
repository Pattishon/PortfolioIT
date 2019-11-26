import React from "react";
import Card from "@material-ui/core/Card";

const SkillsList = ({ showSkillsList }) => (
  <div className="cover-page skills-list offset" onClick={showSkillsList}>
    <Card className="skills-list__card px-2 py-3 my-2">
      <div className="skills-list__container">
        <h1 className="skills__title text-center text-uppercase text-turq-med">
          Skills
        </h1>
        <hr className="skills__hr" />
        <h2 className="skills-list__subtitle text-uppercase">Programming</h2>
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
        <h2 className="skills-list__subtitle text-uppercase">Design</h2>
        <ul className="skills-list__list">
          <li>Inkscape</li>
          <li>Figma</li>
          <li>Material Design</li>
          <li>Photoshop</li>
          <li>Procreate</li>
        </ul>
        <h2 className="skills-list__subtitle text-uppercase">
          Currently Learning
        </h2>
        <ul className="skills-list__list">
          <li>React-bootstrap</li>
          <li>Node.js</li>
        </ul>
      </div>
    </Card>
  </div>
);

export default SkillsList;
