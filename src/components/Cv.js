import React from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useTranslation } from "react-i18next";

const Cv = ({ hideCv }) => {
  const { t } = useTranslation();
  const fn = e => {
    e.stopPropagation();
  };

  return (
    <div id="cv" className="cv cover-page offset" onClick={hideCv}>
      <Card className="cv__card px-2 py-3 my-2" onClick={e => fn(e)}>
        <IconButton className="cv__close-button" onClick={hideCv}>
          <CloseIcon color="secondary" />
        </IconButton>
        <h1 className="cv_title"> PATRYCJA ADAMCZYK</h1>
        <hr />
        {/* experience */}
        <h2 className="cv__section-title">{t("cv.subtitles.experience")}</h2>
        <div className="cv__exp">
          <div className="d-flex flex-column flex-md-row">
            <div className="timestamps small d-flex flex-md-column justify-content-center">
              <p>
                2019-05 <span className="no-wrap">2019-11</span>
              </p>
              <p>R@ilstein</p>
              <p>{t("cv.experience.programmer")}</p>
            </div>
            <div className="responsibilities">
              <ul className="cv__list cv__list--exp">
                <li>{t("cv.experience.developing")}</li>
                <li>{t("cv.experience.designing")}</li>
                <li>{t("cv.experience.blog")}</li>
                <li>{t("cv.experience.assets")}</li>
                <li>{t("cv.experience.scrum")}</li>
                <li>
                  {t("cv.experience.technologies")}: React, Redux, Jest, CSS3,
                  RWD, TailwindCSS, GraphQL, Docker.
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="timestamps small d-flex flex-md-column justify-content-center">
              <p>
                2016-01 <span className="no-wrap">2019-05</span>
              </p>
              <p>Integer.pl</p>
              <p>{t("cv.experience.service")}</p>
            </div>
            <div className="responsibilities">
              <ul className="cv__list cv__list--exp">
                <li>{t("cv.experience.verification")}</li>
                <li>{t("cv.experience.collabDept")}</li>
                <li>{t("cv.experience.collabForeign")}</li>
                <li>{t("cv.experience.negotiation")}</li>
                <li>{t("cv.experience.coordination")}</li>
                <li>{t("cv.experience.serviceActions")}</li>
                <li>{t("cv.experience.reports")}</li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="timestamps small d-flex flex-md-column justify-content-center">
              <p>
                2015-06 <span className="no-wrap">2016-01</span>
              </p>
              <p>
                InSupport Center <span className="no-wrap">Sp. z o. o.</span>
              </p>
              <p>{t("cv.experience.leader")}</p>
            </div>
            <div className="responsibilities">
              <ul className="cv__list cv__list--exp">
                <li>{t("cv.experience.supervision")}</li>
                <li>{t("cv.experience.collaboration")}</li>
                <li>{t("cv.experience.suppReports")}</li>
                <li>{t("cv.experience.helpdesk")}</li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="timestamps small d-flex flex-md-column justify-content-center">
              <p>
                2014-09 <span className="no-wrap">2015-06</span>
              </p>
              <p>
                InSupport Center <span className="no-wrap">Sp. z o. o.</span>
              </p>
              <p>{t("cv.experience.support")}</p>
            </div>
            <div className="responsibilities">
              <ul className="cv__list cv__list--exp">
                <li>{t("cv.experience.tasks")}</li>
                <li>{t("cv.experience.assistance")}</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        {/* education */}
        <h2 className="cv__section-title">{t("cv.subtitles.education")}</h2>
        <ul className="cv__list text-left px-3 px-md-5 text-md-center">
          <li>
            2011 – {t("cv.education.silesianUniversity")}{" "}
            <strong>{t("cv.education.biotechnology")}</strong>{" "}
            <i>{t("cv.education.bachelor")}</i>
          </li>
          <li>
            2014 – {t("cv.education.silesianUniversity")}{" "}
            <strong>{t("cv.education.biotechnology")}</strong>{" "}
            <i>{t("cv.education.mastes")}</i>{" "}
          </li>
          <li>
            2015 – {t("cv.education.agh")}{" "}
            <strong>{t("cv.education.graphics")}</strong>{" "}
            <i>{t("cv.education.postgrad")}</i>
          </li>
        </ul>
        <hr />
        {/* technologies skills */}
        <div className="d-flex flex-column flex-md-row">
          <div className="tech">
            <h2 className="cv__section-title">
              {t("cv.subtitles.technologies")}{" "}
            </h2>
            <ul className="cv__list cv__list--tech">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>jQuery</li>
              <li>Firebase</li>
              <li>Webpack</li>
              <li>Jest</li>
              <li>Enzyme</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <hr className="d-md-none mx-0" />
          <div className="cv-skills">
            <h2 className="cv__section-title">{t("cv.subtitles.skills")}</h2>
            <ul className="cv__list skills__list">
              <li>{t("cv.skills.1")}</li>
              <li>{t("cv.skills.2")}</li>
              <li>{t("cv.skills.3")}</li>
              <li>{t("cv.skills.4")}</li>
              <li>{t("cv.skills.5")}</li>
              <li>{t("cv.skills.6")}</li>
            </ul>
          </div>
        </div>
        <hr />
        {/* lang */}
        <h2 className="cv__section-title">{t("cv.subtitles.languages")}</h2>
        <p>{t("cv.languages.pl")}</p>
        <p>{t("cv.languages.en")}</p>
        <p>{t("cv.languages.ge")}</p>
        <hr />
        {/* interests */}
        <h2 className="cv__section-title">{t("cv.subtitles.interests")}</h2>
        <ul className="cv__list cv__list--interests">
          <li>{t("cv.interests.art")}</li>
          <li>{t("cv.interests.dance")}</li>
          <li>{t("cv.interests.games")}</li>
          <li>{t("cv.interests.larp")}</li>
          <li>{t("cv.interests.craft")}</li>
          <li>{t("cv.interests.trekking")}</li>
        </ul>
        <hr />
        {/* other */}
        <h2 className="cv__section-title">{t("cv.subtitles.additional")}</h2>
        <div className="links">
          <p>
            LinkediIn:{" "}
            <a
              href="https://pl.linkedin.com/in/patrycjaadamczyk"
              target="_blank"
              rel="noopener noreferrer"
            >
              pl.linkedin.com/in/patrycjaadamczyk
            </a>
          </p>
          <p>
            {t("cv.links.website")} (portfolio):{" "}
            <a
              href="https://patti-adams.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://patti-adams.netlify.com/
            </a>
          </p>
          <p>
            Github:{" "}
            <a
              href="https://github.com/Pattishon"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Pattishon
            </a>
          </p>
          <p>
            Instagram ({t("cv.links.art")}):{" "}
            <a
              href="https://www.instagram.com/pattishon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.instagram.com/pattishon/
            </a>
          </p>
        </div>
        <p className="small font-italic m-3 mt-5 m-md-5">{t("cv.consent")}</p>
      </Card>
    </div>
  );
};

export default Cv;
