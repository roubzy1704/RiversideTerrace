import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Pages/Homepage/Homepage";
import About from "./Components/Pages/About/About";
import CivicClub from "./Components/Pages/CivicClub/CivicClub";
import NewsEvents from "./Components/Pages/NewsEvents/NewsEvents";
import History from "./Components/Pages/History/History";
import Contacts from "./Components/Pages/Contacts/Contacts";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";

import RTLogo from "./Images/RTLogo.png";
import "./Shared/Shared.css";
import "./App.scss";

function App() {
  return (
    <div id="page-container">
      <div className="center logo">
        {" "}
        {/* //TODO change link url */}
        <a href="/RiversideTerrace/Home" target="_self">
          <img src={RTLogo} alt="Riverside Terrace" />
        </a>
      </div>

      <div className="">
        {/* <Provider store={store}> */}
        <Router basename="/">
          <NavBar />
          <div id="content-wrap">
            <Switch>
              <Route path="/" component={Homepage} exact />
              {/* <Route path="/RiversideTerrace" component={Homepage} /> */}
              <Route path="/About" component={About} exact />
              <Route path="/Civic_Club" component={CivicClub} exact />
              <Route path="/News_Events" component={NewsEvents} exact />
              <Route path="/History" component={History} exact />
              <Route path="/Contacts" component={Contacts} exact />
              <Route path="*" exact={true} component={NotFound} />
            </Switch>
          </div>
          <div id="footer">
            <Footer />
          </div>
        </Router>
        {/* </Provider> */}
      </div>
    </div>
  );
}

export default App;
