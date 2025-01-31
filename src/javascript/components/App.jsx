import "../../stylesheets/custom.css";
import React, { useState } from "react";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Intro from "./Intro";
// import GenerateCSV from "./GenerateCSV";
import Upload from "./Upload";
import Report from "./Report";
import About from "./About";
import ScrollToTop from "./ScrollToTop";
import Instructions from "./Instructions";

const NavBarWithRouter = withRouter(NavBar);

let homeActive = false;
if (window.location.pathname === "/") {
  homeActive = true;
}

const App = () => {

  const [fileNameInHeader, setFileNameInHeader] = useState("");

  return (
    <div>
      <Router>
        <ScrollToTop />
        <header
          id="header"
          className={
            homeActive
              ? "fixed-top d-flex align-items-center header-transparent"
              : "fixed-top d-flex align-items-center"
          }
        >
          <NavBarWithRouter
            fileNameInHeader={fileNameInHeader}
          />
        </header>

        <Switch>
          <Route path="/u/:id">
            <Report />
          </Route>
          <Route path="/upload">
            <Upload
              /* setFileNameInHeader={setFileNameInHeader} */
            />
          </Route>
          <Route path="/instructions">
            <Instructions/>
          </Route>
          {/* <Route path="/format-info">
            <GenerateCSV />
          </Route> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Intro
              setFileNameInHeader={setFileNameInHeader}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
