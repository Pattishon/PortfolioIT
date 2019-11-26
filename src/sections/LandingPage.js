import React from "react";
import Button from "@material-ui/core/Button";
import { LinkContainer } from "react-router-bootstrap";

const LandingPage = () => (
  <div
    id="home"
    className="offset landing-page"
    style={{
      backgroundImage: "url(img/bg.png)"
    }}
  >
    <div className="text-center caption">
      <h1 className="caption__title text-off-white">Patti Adams</h1>
      <h2 className="caption__subtitle text-off-white">Front-end Developer</h2>

      <LinkContainer to="/about">
        <Button variant="contained" color="primary" className="button-dark">
          Get Started
        </Button>
      </LinkContainer>
    </div>
  </div>
);

export default LandingPage;
