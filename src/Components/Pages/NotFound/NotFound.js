import React from "react";

import DataExtraction from "../../../assets/Data_extraction.svg";
import Faq from "../../../assets/Faq.svg";
import NoData from "../../../assets/No_data.svg";
import OnlineTest from "../../../assets/online_test.svg";
import NotFound404 from "../../../assets/page_not_found.svg";

import "./NotFound.scss";

const NotFound = () => {
  let number = Math.floor(Math.random() * 5) + 1;

  return (
    <React.Fragment>
      <div className="notFound">
        {number === 1 ? (
          <img
            src={DataExtraction}
            alt="Not Found"
            width="30%"
            height="auto"
            className="notFoundImg"
          />
        ) : number === 2 ? (
          <img
            src={Faq}
            alt="Not Found"
            width="30%"
            height="auto"
            className="notFoundImg"
          />
        ) : number === 3 ? (
          <img
            src={NoData}
            alt="Not Found"
            width="20%"
            height="auto"
            className="notFoundImg"
          />
        ) : number === 4 ? (
          <img
            src={OnlineTest}
            alt="Not Found"
            width="30%"
            height="auto"
            className="notFoundImg"
          />
        ) : (
          <img
            src={NotFound404}
            alt="Not Found"
            width="30%"
            height="auto"
            className="notFoundImg"
          />
        )}
        <p>We are sorry, but the page you are looking for does not exist!</p>
        <a href="/Home" className="button-56">
          Go Home
        </a>
      </div>
    </React.Fragment>
  );
};
export default NotFound;
