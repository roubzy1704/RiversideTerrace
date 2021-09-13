import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="Footer">
        <div className="row">
          <div
            className="col-md-6 phoneEmail"
            style={{ display: "flex", flexDirection: "column" }}>
            <a href="mailto:info@riversidedistricthouston.org">
              info@riversidedistricthouston.org
            </a>
            <a href="tel:111.235.6664">111.235.6664</a>
          </div>
          <div className="col-md-6 socialIcons">
            <a href="#" target="_self" rel="noopener">
              Facebook
            </a>

            <a href="#" target="_self" rel="noopener">
              Youtube
            </a>

            <a href="#" target="_self" rel="noopener">
              LinkedIn
            </a>

            <a href="#" target="_self" rel="noopener">
              Twitter
            </a>

            <a href="#" target="_self" rel="noopener">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
