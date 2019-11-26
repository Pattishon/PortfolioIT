import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import SkillsCarousel from "../components/SkillsCarousel.js";
import SkillsList from "../components/SkillsList";

const Skills = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [showList, setShowList] = useState(false);

  const showSkillsList = () => {
    if (!isMoving) {
      setShowList(!showList);
    }
  };

  return (
    <div id="skills" className="offset skills">
      <h1 className="skills__title text-center text-uppercase text-off-white">
        Skills
      </h1>
      <hr className="skills__hr" />
      <Card className="skills__card">
        <SkillsCarousel
          setIsMoving={setIsMoving}
          showSkillsList={showSkillsList}
        />
      </Card>
      {showList ? <SkillsList showSkillsList={showSkillsList} /> : ""}
    </div>
  );
};

export default Skills;
