import React from "react";
import { Link } from "react-router-dom";

import nrg from "../../../Images/nrg-stadium.jpg";
import medical_center from "../../../Images/medicalCenter.jpg";
import UH from "../../../Images/UH.jpg";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <React.Fragment>
      <div className="Homepage">
        <div className="section1">
          <h1 className="center bannerText">A Place to Call Home</h1>
        </div>
        {/* <div className="container"> */}
        <div className="HomepageWelcome center">
          <div style={{ marginBottom: "10px" }}>
            <h1>Welcome to</h1>
            <h1>Riverside Terrace</h1>
          </div>
          <h5>
            The South Macgregor Civic Club (SMCC) continually strives to bring
            residents together as
          </h5>
          <h5>
            neighbors. The SMCC promotes civic activity with the goals of
            improving our life in the inner city
          </h5>
          <h5>and preserving the historic heritage of Riverside Terrace.</h5>
          <p style={{ marginTop: "15px" }}>
            "A Great Place To Live, Work, Play"
          </p>
        </div>
        {/* </div> */}
        <div className="homeBtnGrp">
          <div className="row homeBtnGrpRow">
            <Link to="/Pay_Dues">
              <button type="button" className="btn homeBtn">
                Pay Dues
              </button>
            </Link>
            <Link to="/dashboard">
              <button type="button" className="btn homeBtn">
                New Neighbor?
              </button>
            </Link>
            <Link to="/dashboard">
              <button type="button" className="btn homeBtn">
                Report a <br /> Violation
              </button>
            </Link>
            <Link to="/dashboard">
              <button type="button" className="btn homeBtn">
                Emergency <br /> Contacts
              </button>
            </Link>
            <Link to="/dashboard">
              <button type="button" className="btn homeBtn">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="center HomepageWelcome2">
          <h4>"What sells Riverside Terrace is strictly location.</h4>
          <h4>
            You're close to everything - the Medical Center, NRG Stadium,
            Museums, Universities"
          </h4>
          <p>SHAD BOGANY | BOGANY PROPERTIES [2002]</p>
          <div className="container">
            <div className="row HomepageWelcome2Img">
              {/* <div className="col-md-4">hi</div>
              <div className="col-md-4">hi</div>
              <div className="col-md-4">hi</div> */}
              <div className="col-lg-4 locationImg">
                <img
                  src={nrg}
                  alt="NRG Stadium"
                  width="330px"
                  height="200px"></img>
              </div>
              <div className="col-lg-4 locationImg">
                <img
                  src={UH}
                  alt="University of Houston"
                  width="330px"
                  height="200px"></img>
              </div>
              <div className="col-lg-4 locationImg">
                <img
                  src={medical_center}
                  alt="Medical Center"
                  width="330px"
                  height="200px"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
