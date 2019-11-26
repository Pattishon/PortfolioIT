import React from "react";
// import Filters from "../components/Filters";
import Project from "../components/Project";

const projects = [
  {
    title: "Expensify",
    imgSrc: "img/thumbnails/expensify.png",
    imgAlt: "expencify",
    info:
      "React application allowing you to gather your expenses. You can log in with google account. Created during a react course.",
    technologies: (
      <>
        <strong>React</strong>, <strong>Redux</strong>,{" "}
        <strong>Firebase</strong>,<strong>Webpack</strong>,{" "}
        <strong>SCSS</strong>,<strong>React-router</strong>, tested with{" "}
        <strong>Jest</strong> {"&"} <strong>Enzyme</strong>
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
    info:
      "If you cannot decide where to eat or what movie to watch you can ask this app. Type in all the options and the app will decide for you. Created during a react course.",
    technologies: (
      <>
        <strong>React</strong>, <strong>Webpack</strong>, <strong>SCSS</strong>{" "}
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
    title: "Neon Themed Bootstrap",
    imgSrc: "img/thumbnails/neon_theme.png",
    imgAlt: "neon theme bootstrap",
    info: "Responsive website project created with use of Bootstrap 4.",
    technologies: (
      <>
        <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>
      </>
    ),
    link: "/project/bootstrap-neon",
    tags: ["Bootstrap", "HTML", "CSS"]
  },
  {
    title: "Bootstrap",
    imgSrc: "img/thumbnails/slider.png",
    imgAlt: "bootstrap",
    info:
      "Responsive website project created with use of Bootstrap 4. Ideal for portfolio presentation.",
    technologies: (
      <>
        <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>
      </>
    ),
    link: "/project/bootstrap",
    tags: ["Bootstrap", "HTML", "CSS"]
  },
  {
    title: "Artist portfolio",
    imgSrc: "img/thumbnails/artist-portfolio.png",
    imgAlt: "artist portfolio",
    info:
      "Responsive portfolio project. It was created as an exercise with RWD. All featured paintings are created by the author.",
    technologies: (
      <>
        <strong>HTML</strong>, <strong>CSS</strong>, <strong>RWD</strong>
      </>
    ),
    link: "https://patti-adams-art.netlify.com",
    tags: ["RWD", "HTML", "CSS"]
  },
  {
    title: "Old portfolio",
    imgSrc: "img/thumbnails/portfolio.png",
    imgAlt: "portfolio",
    info: "First version of this portfolio. Created with bootstrap.",
    technologies: (
      <>
        <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>
      </>
    ),
    link: "https://partycja-a.netlify.com/",
    tags: ["Bootstrap", "HTML", "CSS"]
  }
];
const Portfolio = () => {
  return (
    <div id="portfolio" className="offset portfolio pb-5">
      <h1 className="portfolio__title text-center text-uppercase text-hight-leg">
        Portfolio
      </h1>
      <hr className="portfolio__hr" />
      {/* <div>
        <Filters />
      </div> */}
      <div className="portfolio__projects mb-5 row">
        {projects.map(project => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
