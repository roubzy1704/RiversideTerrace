import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

import RTSoloLogo from "./../../Images/RTSoloLogo.png";
import "./Navbar.scss";

const NavBar = () => {
  //This block of code is used for navbar opacity setting on scroll
  //although the changes to bootstrap nav have made the code slightly obsolete
  //i still use it because the bootstrap opacity fade on the navbar on scroll is too low
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 200) {
        //using Jquery
        $(".navbar").addClass("navBarChangeOnScroll");
        //using DOM manipulation
        // document
        // 	.getElementsByClassName("navbar")[0]
        // 	.classList.add("navBarChangeOnScroll");
      } else {
        //using DOM Manipulation
        document
          .getElementsByClassName("navbar")[0]
          .classList.remove("navBarChangeOnScroll");
      }
    });
  });

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Home">
            <img
              src={RTSoloLogo}
              alt="River Terrace"
              style={{ width: "40px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            // aria-expanded="false"
            // aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            tabIndex="-1"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <img
                src={RTSoloLogo}
                alt="Medical Center"
                width="60px"
                height="auto"
              />
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav nav-fill w-100 nav-pills">
                <li className="nav-item">
                  <NavLink to="/Home" className="nav-link" exact>
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/About" className="nav-link" exact>
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    CIVIC CLUB
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdown">
                    <li>
                      {/* <button className="dropdown-item"> */}
                      <NavLink to="/Civic_Club" className="dropdown-item" exact>
                        CIVIC CLUB
                      </NavLink>
                      {/* </button> */}
                    </li>
                    <li>
                      {/* <button className="dropdown-item"> */}
                      <NavLink to="/Civic_Club" className="dropdown-item" exact>
                        Historic Homes
                      </NavLink>
                      {/* </button> */}
                    </li>
                    <li>
                      {/* <button className="dropdown-item"> */}
                      <NavLink to="/Civic_Club" className="dropdown-item" exact>
                        Notable People
                      </NavLink>
                      {/* </button> */}
                    </li>
                    <li>
                      {/* <button className="dropdown-item"> */}
                      <NavLink to="/Civic_Club" className="dropdown-item" exact>
                        City Council
                      </NavLink>
                      {/* </button> */}
                    </li>
                    <li>
                      {/* <button className="dropdown-item"> */}
                      <NavLink to="/Civic_Club" className="dropdown-item" exact>
                        Holiday Lights
                      </NavLink>
                      {/* </button> */}
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      {/* <button className="dropdown-item dropdown-item"> */}
                      <NavLink to="/Civic_Club" className="dropdown-item" exact>
                        Coming Soon
                      </NavLink>
                      {/* </button> */}
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/News_Events" className="nav-link" exact>
                    NEWS & EVENTS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/History" className="nav-link" exact>
                    HISTORY
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Contacts" className="nav-link" exact>
                    CONTACTS
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" exact>
                HOME <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link" exact>
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Civic_Club" className="nav-link " exact>
                CIVIC CLUB
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/News_Events" className="nav-link " exact>
                NEWS & EVENTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/History" className="nav-link " exact>
                HISTORY
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Contacts" className="nav-link " exact>
                CONTACTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/SignIn" className="nav-link " exact>
                <span className="iconify" data-icon="bi:person"></span> {"   "}{" "}
                SIGNIN
              </NavLink>
            </li>
          </ul>
        </div>
      </nav> */}
    </React.Fragment>
  );
};

export default NavBar;
