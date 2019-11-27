import React from "react";
import { useTranslation } from "react-i18next";
// import Filters from "../components/Filters";
import Project from "../components/Project";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Expensify",
      imgSrc: "img/thumbnails/expensify.png",
      imgAlt: "expencify",
      info: t("portfolio.projects.expensify"),
      technologies: (
        <>
          <strong>React</strong>, <strong>Redux</strong>,{" "}
          <strong>Firebase</strong>, <strong>Webpack</strong>,{" "}
          <strong>SCSS</strong>, <strong>React-router</strong>,{" "}
          {t("portfolio.projects.tested")}
          <strong>Jest</strong> {t("portfolio.projects.and")}{" "}
          <strong>Enzyme</strong>
        </>
      ),
      link: "https://expensify-control-expenses.herokuapp.com/",
      tags: [
        "React",
        "Redux",
        "Firebase",
        "Webpack",
        "SCSS",
        "React-router",
        "Jest",
        "Enzyme"
      ]
    },
    {
      title: "Indecission",
      imgSrc: "img/thumbnails/indecission.png",
      imgAlt: "indecission",
      info: t("portfolio.projects.indecission"),
      technologies: (
        <>
          <strong>React</strong>, <strong>Webpack</strong>,{" "}
          <strong>SCSS</strong>{" "}
        </>
      ),
      link: "https://indecission-app.herokuapp.com/",
      tags: [
        "React",
        // "Redux",
        // "Firebase",
        "Webpack",
        "SCSS"
        // "React-router",
        // "Jest",
        // "Enzyme"
      ]
    },
    {
      title: "Neon Bootstrap",
      imgSrc: "img/thumbnails/neon_theme.png",
      imgAlt: "neon theme bootstrap",
      info: t("portfolio.projects.neon"),
      technologies: (
        <>
          <strong>HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>Bootstrap</strong>
        </>
      ),
      link: "https://partycja-a.netlify.com/portfolio/neon_theme/index.html",
      tags: ["Bootstrap", "HTML", "CSS"]
    },
    {
      title: "Bootstrap",
      imgSrc: "img/thumbnails/slider.png",
      imgAlt: "bootstrap",
      info: t("portfolio.projects.bootstrap"),
      technologies: (
        <>
          <strong>HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>Bootstrap</strong>
        </>
      ),
      link:
        "https://partycja-a.netlify.com/portfolio/bootstrap%20with%20image%20slider/bootstrap-image.html",
      tags: ["Bootstrap", "HTML", "CSS"]
    },
    {
      title: "Artist portfolio",
      imgSrc: "img/thumbnails/artist-portfolio.png",
      imgAlt: "artist portfolio",
      info: t("portfolio.projects.art"),
      technologies: (
        <>
          <strong>HTML</strong>, <strong>CSS</strong>, <strong>RWD</strong>
        </>
      ),
      link: "https://patti-adams-art.netlify.com",
      tags: ["RWD", "HTML", "CSS"]
    },
    {
      title: "Portfolio",
      imgSrc: "img/thumbnails/portfolio.png",
      imgAlt: "portfolio",
      info: t("portfolio.projects.portfolio"),
      technologies: (
        <>
          <strong>HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>Bootstrap</strong>
        </>
      ),
      link: "https://partycja-a.netlify.com/",
      tags: ["Bootstrap", "HTML", "CSS"]
    }
  ];
  return (
    <div id="portfolio" className="offset portfolio pb-5">
      <h1 className="portfolio__title text-center text-uppercase text-hight-leg">
        {t("portfolio.title")}
      </h1>
      <hr className="portfolio__hr" />

      <div className="portfolio__projects mb-5 row">
        {projects.map(project => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
