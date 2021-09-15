import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Pages/Homepage/Homepage";
import PayDues from "./Components/Pages/Homepage/PayDues/PayDues";
import About from "./Components/Pages/About/About";
import CivicClub from "./Components/Pages/CivicClub/CivicClub";
import NewsEvents from "./Components/Pages/NewsEvents/NewsEvents";
import History from "./Components/Pages/History/History";
import Contacts from "./Components/Pages/Contacts/Contacts";
import SignIn from "./Components/Pages/SignIn/SignIn";
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
              <Route path="/RiversideTerrace/Home" exact>
                <Homepage />
              </Route>
              <Route path="/RiversideTerrace/Pay_Dues" exact>
                <PayDues />
              </Route>
              <Route path="/RiversideTerrace/About" exact>
                <About />
              </Route>
              <Route path="/RiversideTerrace/Civic_Club" exact>
                <CivicClub />
              </Route>
              <Route path="/RiversideTerrace/News_Events" exact>
                <NewsEvents />
              </Route>
              <Route path="/RiversideTerrace/History" exact>
                <History />
              </Route>
              <Route path="/RiversideTerrace/Contacts" exact>
                <Contacts />
              </Route>
              {/* <Route path="/SignIn" exact>
                <SignIn />
              </Route> */}
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