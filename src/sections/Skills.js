import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { useTranslation } from "react-i18next";
import SkillsCarousel from "../components/SkillsCarousel.js";
import SkillsList from "../components/SkillsList";

const Skills = () => {
  const { t } = useTranslation();
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
        {t("skills.title")}
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
