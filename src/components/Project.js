import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-simple-icons/github";

const Project = ({ project }) => {
  const { t } = useTranslation();
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
  };
  return (
    <div className="project mb-5 col-sm-6 col-lg-4">
      <div className="project__details">
        <img
          src={project.imgSrc}
          alt={project.imgAlt}
          onClick={toggleDescription}
          className="project__img p-3"
        />
        {descriptionVisible ? (
          <div
            className="project__description text-center d-flex flex-column justify-content-center text-off-white"
            onClick={toggleDescription}
          >
            <p className="project__info m-2">{project.info}</p>
            <p className="project__technologies">
              {t("portfolio.technologies")}: {project.technologies}.
            </p>
            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={e => {
                  e.stopPropagation();
                }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent button-light"
                >
                  {t("portfolio.goTo")}
                  {project.title}
                </a>
              </Button>
            </div>
            {project.git && (
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="m-3"
              >
                <Icon icon={githubIcon} className="project__githib-icon" />
              </a>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="project__tags d-flex flex-wrap justify-content-center">
        {project.tags.map(tag => (
          <Chip key={tag} label={tag} color="primary" className="m-1" />
        ))}
      </div>
    </div>
  );
};

export default Project;
