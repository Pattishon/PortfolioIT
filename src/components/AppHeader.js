import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Fab from "@material-ui/core/Fab";
import { Menu } from "@material-ui/icons";

const Header = () => {
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
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link to="/about" className="text-right">
                About me
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/skills">
              <Nav.Link className="text-right">Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link className="text-right">Portfolio</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/blog">
              <Nav.Link className="text-right">Blog</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/contact">
              <Nav.Link className="text-right">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
