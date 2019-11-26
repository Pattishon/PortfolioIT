import React from "react";
import Card from "@material-ui/core/Card";

const Cv = ({ hideCv }) => {
  const fn = e => {
    e.stopPropagation();
  };

  return (
    <div id="cv" className="cv cover-page offset" onClick={hideCv}>
      <Card className="cv__card px-2 py-3 my-2" onClick={e => fn(e)}>
        <h1 className="cv_title"> PATRYCJA ADAMCZYK</h1>
        <hr />
        <p className="d-flex flex-column flex-md-row justify-content-md-around">
          <span>ul. Raciborska 10/30, 30-384 Kraków</span>
          <span>tel. 721329128</span>
          <span>adamczyk.p@protonmail.com</span>
        </p>
        <hr />
        <div className="d-flex flex-column flex-md-row">
          <div className="tech">
            <h2 className="cv__section-title">TECHNOLOGIES </h2>
            <ul className="cv__list cv__list--tech">
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
          <hr className="d-md-none mx-0" />
          <div className="cv-skills">
            <h2 className="cv__section-title">SKILLS</h2>
            <ul className="cv__list skills__list">
              <li>
                Good organization skills – Organizing Larps and field games for
                Orkon (for 50 people and more)
              </li>
              <li>Creativity – Required for interests such as art and LARPs</li>
              <li>Computer graphics – Procreate, Photoshop, Gimp, Krita</li>
              <li>Vector graphics – Inkscape</li>
              <li>3D graphics – Blender</li>
            </ul>
          </div>
        </div>
        <hr />
        <h2 className="cv__section-title">EDUCATION</h2>
        <ul className="cv__list text-left px-3 px-md-5 text-md-center">
          <li>2011 – Silesian University Biotechnology bachelor</li>
          <li>2014 - Silesian University Biotechnology masters</li>
          <li>
            2015 - AGH University of Science and Technology Computer Graphics
            postgraduate studies
          </li>
        </ul>
        <hr />
        <h2 className="cv__section-title">EXPERIENCE</h2>
        <div className="cv__exp">
          <div className="d-flex flex-column flex-md-row">
            <div className="timestamps small d-flex flex-md-column justify-content-center">
              <p>
                2019-05 <span className="no-wrap">2019-11</span>
              </p>
              <p>R@ilstein</p>
              <p>Programmer</p>
            </div>
            <div className="responsibilities">
              <ul className="cv__list cv__list--exp">
                <li>
                  Developing a complex, responsive application for hotels.
                </li>
                <li>Designing layouts for applications.</li>
                <li>
                  Technologies: React, Readux, Jest, Css3, RWD, TailwindCSS,
                  GraphQL, Docker.
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
              <p>Service Specialist</p>
            </div>
            <div className="responsibilities">
              <ul className="cv__list cv__list--exp">
                <li>Initial verification of reported service problems.</li>
                <li>
                  Serviceman work coordination on foreign markets (eg. British,
                  French, Dutch and Canadian).
                </li>
                <li>Developing reports with MS Excel.</li>
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
              <p>Technical Support Team Leader</p>
            </div>
            <div className="responsibilities">
              <ul className="cv__list cv__list--exp">
                <li>Coordination and supervision of the team work.</li>
                <li>Collaboration with other departments.</li>
                <li>
                  Immediate help for the customers from foreign markets (mainly
                  British, Dutch and Malaysian).
                </li>
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
              <p>Technical Support Specialist</p>
            </div>
            <div className="responsibilities">
              <ul className="cv__list cv__list--exp">
                <li>
                  Receiving and processing of tasks regarding technical and
                  operational problems.
                </li>
                <li>
                  Ad hoc assistance for British, Dutch and Malaysian clients.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <h2 className="cv__section-title">LANGUAGES</h2>
        <p>English - certificate (CAE)</p>
        <p>German - basic</p>
        <hr />
        <h2 className="cv__section-title">INTERESTS</h2>
        <ul className="cv__list cv__list--interests">
          <li>Art – painting, drawing, film</li>
          <li>Dance</li>
          <li>Video games</li>
          <li>LARPs</li>
          <li>Sewing and crafts</li>
          <li>Trekking</li>
        </ul>
        <hr />
        <h2 className="cv__section-title">ADDITIONAL INFORMATION</h2>
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
            Website (portfolio):{" "}
            <a
              href="https://partycja-a.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://partycja-a.netlify.com/
            </a>
          </p>
          <p>
            Instagram (artictic portfolio):{" "}
            <a
              href="https://www.instagram.com/pattishon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.instagram.com/pattishon/
            </a>
          </p>
        </div>
        <p className="small font-italic m-3 mt-5 m-md-5">
          I hereby give consent for my personal data included in my application
          to be processed for the purposes of the recruitment process under the
          European Parliament's and Council of the European Union Regulation on
          the Protection of Natural Persons as of 27 April 2016, with regard to
          the processing of personal data and on the free movement of such data,
          and repealing Directive 95/46/EC (Data Protection Directive)
        </p>
      </Card>
    </div>
  );
};

export default Cv;
