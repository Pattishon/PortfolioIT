import React from "react";
import Carousel from "react-multi-carousel";
import { Icon } from "@iconify/react";
import html5Icon from "@iconify/icons-simple-icons/html5";
import css3Icon from "@iconify/icons-simple-icons/css3";
import sassIcon from "@iconify/icons-simple-icons/sass";
import javascriptIcon from "@iconify/icons-simple-icons/javascript";
import reactIcon from "@iconify/icons-simple-icons/react";
import reduxIcon from "@iconify/icons-simple-icons/redux";
import firebaseIcon from "@iconify/icons-simple-icons/firebase";
import webpackIcon from "@iconify/icons-simple-icons/webpack";
import jestIcon from "@iconify/icons-simple-icons/jest";
import bootstrapIcon from "@iconify/icons-simple-icons/bootstrap";
import "react-multi-carousel/lib/styles.css";

const skills = [
  {
    symbol: <Icon icon={html5Icon} className="skill__icon" />,
    text: "HTML 5"
  },
  {
    symbol: <Icon icon={css3Icon} className="skill__icon" />,
    text: "CSS 3"
  },
  {
    symbol: <Icon icon={sassIcon} className="skill__icon" />,
    text: "SCSS"
  },
  {
    symbol: <Icon icon={javascriptIcon} className="skill__icon" />,
    text: "JavaScript"
  },
  {
    symbol: <Icon icon={reactIcon} className="skill__icon" />,
    text: "React"
  },
  {
    symbol: <Icon icon={reduxIcon} className="skill__icon" />,
    text: "Redux"
  },
  {
    symbol: <Icon icon={firebaseIcon} className="skill__icon" />,
    text: "Firebase"
  },
  {
    symbol: <Icon icon={webpackIcon} className="skill__icon" />,
    text: "Webpack"
  },
  {
    symbol: <Icon icon={jestIcon} className="skill__icon" />,
    text: "Jest"
  },
  {
    symbol: <Icon icon={bootstrapIcon} className="skill__icon" />,
    text: "Bootstrap"
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1000 },
    items: 3,
    paritialVisibilityGutter: 10
  },
  desktop: {
    breakpoint: { max: 1000, min: 464 },
    items: 2,
    paritialVisibilityGutter: 10
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 120
  }
};

const SkillsCarousel = ({ setIsMoving, showSkillsList }) => {
  return (
    <>
      <Carousel
        arrows={false}
        afterChange={() => setIsMoving(false)}
        // autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlay
        autoPlaySpeed={5000}
        beforeChange={() => setIsMoving(true)}
        centerMode={true}
        containerClass="skills__carousel"
        customTransition="transform 500ms ease-in-out"
        draggable
        infinite
        keyBoardControl={true}
        minimumTouchDrag={30}
        removeArrowOnDeviceType={["mobile"]}
        responsive={responsive}
        sliderClass="skills__slider"
        transitionDuration={500}
      >
        {skills.map(skill => (
          <div
            key={skill.text}
            className="skill text-center"
            onClick={showSkillsList}
          >
            {skill.symbol}
            <h2 className="skill__text">{skill.text}</h2>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default SkillsCarousel;
