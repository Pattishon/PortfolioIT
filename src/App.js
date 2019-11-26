import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Sections from "./sections";

const theme = createMuiTheme({
  palette: {
    primary: { dark: "#01776E", main: "#009183", light: "#5FD1D3" },
    secondary: { dark: "#DF5E01", main: "#FD9F0D" }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/">
            <Sections />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
