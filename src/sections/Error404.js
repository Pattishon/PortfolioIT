import React from "react";
import Button from "@material-ui/core/Button";
import { LinkContainer } from "react-router-bootstrap";

const Error = () => (
  <div
    id="error404"
    className="offset"
    style={{ height: "100vh", background: "grey", paddingTop: "56px" }}
  >
    Error404 - page not found.
    <LinkContainer to="/">
      <Button variant="contained" color="primary" className="button-dark">
        Back to home page
      </Button>
    </LinkContainer>
    <div className="text-center">
      <hr className="socket" />
      <p>&copy; Patrycja Adamczyk, 2020</p>
    </div>
  </div>
);

export default Error;
