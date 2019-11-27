import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Fab from "@material-ui/core/Fab";
import { Menu } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleChangeLang = lang => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };
  return (
    <>
      <style type="text/css">
        {`
        .bg-navbar {
          background-color: #01776EEE;
        }
        .action {
          background-color: #FD9F0D;
          outline: none !important;
        }
        .action:active, .action:hover  {
          background-color: #DF5E01;          
        }
    `}
      </style>
      <Navbar
        bg="navbar"
        expand="md"
        fixed="top"
        className="navbar-dark"
        collapseOnSelect
      >
        <LinkContainer to="/">
          <Navbar.Brand>Logo</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          as={Fab}
          className="action"
        >
          <Menu />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/" exact>
              <Nav.Link className="text-right">
                {/* <p class="d-md-none">obrazek</p> */}
                {t("nav.home")}
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link to="/about" className="text-right">
                {t("nav.about")}
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/skills">
              <Nav.Link className="text-right">{t("nav.skills")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link className="text-right">{t("nav.portfolio")}</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/blog">
              <Nav.Link className="text-right">Blog</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/contact">
              <Nav.Link className="text-right">{t("nav.contact")}</Nav.Link>
            </LinkContainer>
          </Nav>
          <div className="d-flex justify-content-end">
            <span
              onClick={() => handleChangeLang("en")}
              className={`language-name btn btn-light m-1 ${language === "en" &&
                "disabled"}`}
            >
              en
            </span>
            <span
              onClick={() => handleChangeLang("pl")}
              className={`language-name btn btn-light m-1 ${language === "pl" &&
                "disabled"}`}
            >
              pl
            </span>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
