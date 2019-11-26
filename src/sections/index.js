import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./About";
import Cv from "../components/Cv";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import Header from "../components/AppHeader";
import Error404 from "./Error404";

const Sections = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" component={LandingPage} exact={true} />
      <Route path="/about" component={About} exact={true} />
      <Route path="/about/cv" component={Cv} exact={true} />
      <Route path="/skills" component={Skills} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route component={Error404} />
    </Switch>
  </>
);

export default Sections;
