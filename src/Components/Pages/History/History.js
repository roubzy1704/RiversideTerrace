import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import historyImg1 from "../../../Images/history/historyImg1.webp";
import historyImg2 from "../../../Images/history/historyImg2.webp";
import historyImg3 from "../../../Images/history/historyImg3.webp";
import historyImg4 from "../../../Images/history/historyImg4.jpg";
import historyImg5 from "../../../Images/history/historyImg5.webp";
import historyImg6 from "../../../Images/history/historyImg6.webp";
import historyImg7 from "../../../Images/history/historyImg7.jpg";
import historyImg8 from "../../../Images/history/historyImg8.jpg";
import historyImg9 from "../../../Images/history/historyImg9.jpg";

import "./History.scss";

const History = () => {
  const handleImgPreview = () => {
    console.log("click");
    // useFullScreenHandle();
  };
  return (
    <React.Fragment>
      <div className="History">
        <div className="historyContent">
          <h1>
            History of <br /> Riverside Terrace
          </h1>
          <p>
            Riverside Terrace, a neighborhood of expansive wooded lots on
            rolling terrain, spreads along the north and south banks of Braes
            Bayou south of Hermann Park and the Texas Medical Center. Developed
            in the 1920s by Henry F. MacGregor, Riverside Terrace vied with
            River Oaks as the neighborhood of choice for Houston’s new
            well-to-do.
          </p>
        </div>
        <div className="blackBG"></div>
        <div className="carouselContainer">
          <div
            id="RiversideCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-bs-interval="10000"
            data-bs-pause="hover">
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <div className="row carouselSlide">
                  <div className="col-lg-6 carouseulImgContainer">
                    <img
                      src={historyImg1}
                      className="carouselImg"
                      alt="H.F. MacGregor"
                      onClick={handleImgPreview}
                    />
                  </div>
                  <div className="col-lg-6 carouselImgDes">
                    <h4 style={{ color: "white" }}>1920</h4>
                    <h3 style={{ color: "#baa079" }}>HENRY F. MACGREGOR</h3>
                    <p style={{ color: "white" }}>Develops Riverside Terrace</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row carouselSlide">
                  <div className="col-lg-6 carouseulImgContainer">
                    <img
                      src={historyImg2}
                      className="carouselImg"
                      alt="H.F. MacGregor"
                    />
                  </div>
                  <div className="col-lg-6 carouselImgDes">
                    <h4 style={{ color: "white" }}>1930</h4>
                    <h3 style={{ color: "#baa079" }}>FAMILIES MOVED TO</h3>
                    <p style={{ color: "white" }}>
                      Riverside Terrace in the 1930s. During that period the
                      neighborhood hosted the homes of the Weingarten, Finger,
                      and McGregor familiies
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row carouselSlide">
                  <div className="col-lg-6 carouseulImgContainer">
                    <img
                      src={historyImg3}
                      className="carouselImg"
                      alt="H.F. MacGregor"
                    />
                  </div>
                  <div className="col-lg-6 carouselImgDes">
                    <h4 style={{ color: "white" }}>1952</h4>
                    <h3 style={{ color: "#baa079" }}>A WEALTHY</h3>
                    <p style={{ color: "white" }}>
                      African-American cattleman named Jack Caesar moved to the
                      neighborhood. He stayed despite the fact that a bomb
                      detonated on his front porch.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row carouselSlide">
                  <div className="col-lg-6 carouseulImgContainer">
                    <img
                      src={historyImg4}
                      className="carouselImg"
                      alt="H.F. MacGregor"
                    />
                  </div>
                  <div className="col-lg-6 carouselImgDes">
                    <h4 style={{ color: "white" }}>1959</h4>
                    <h3 style={{ color: "#baa079" }}>LAND CLEARANCE</h3>
                    <p style={{ color: "white" }}>
                      began for the construction of the new Texas State Highway
                      288 freeway, destroying several Riverside Terrace homes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row carouselSlide">
                  <div className="col-lg-6 carouseulImgContainer">
                    <img
                      src={historyImg5}
                      className="carouselImg"
                      alt="H.F. MacGregor"
                    />
                  </div>
                  <div className="col-lg-6 carouselImgDes">
                    <h4 style={{ color: "white" }}>1960</h4>
                    <h3 style={{ color: "#baa079" }}>SOME RESIDENTS</h3>
                    <p style={{ color: "white" }}>
                      who wanted the neighborhood to stabilize as an integrated
                      neighborhood posted signs stating "This Is Our Home It Is
                      Not For Sale."
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row carouselSlide">
                  <div className="col-lg-6 carouseulImgContainer">
                    <img
                      src={historyImg6}
                      className="carouselImg"
                      alt="H.F. MacGregor"
                    />
                  </div>
                  <div className="col-lg-6 carouselImgDes">
                    <h4 style={{ color: "white" }}>1963</h4>
                    <h3 style={{ color: "#baa079" }}>THE COMMUNITY</h3>
                    <p style={{ color: "white" }}>
                      had 175 African American families
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row carouselSlide">
                  <div className="col-lg-6 carouseulImgContainer">
                    <img
                      src={historyImg7}
                      className="carouselImg"
                      alt="H.F. MacGregor"
                    />
                  </div>
                  <div className="col-lg-6 carouselImgDes">
                    <h4 style={{ color: "white" }}>1963</h4>
                    <h3 style={{ color: "#baa079" }}>THE SOUTH MACGREGOR</h3>
                    <p style={{ color: "white" }}>Promotion Committee formed</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row carouselSlide">
                  <div className="col-lg-6 carouseulImgContainer">
                    <img
                      src={historyImg8}
                      className="carouselImg"
                      alt="H.F. MacGregor"
                    />
                  </div>
                  <div className="col-lg-6 carouselImgDes">
                    <h4 style={{ color: "white" }}>1985</h4>
                    <h3 style={{ color: "#baa079" }}>JON SCHWARTZ</h3>
                    <p style={{ color: "white" }}>
                      films This Is Our Home It Is Not For Sale, a film
                      documenting Riverside Terrace
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row carouselSlide">
                  <div className="col-lg-6 carouseulImgContainer">
                    <img
                      src={historyImg9}
                      className="carouselImg"
                      alt="H.F. MacGregor"
                    />
                  </div>
                  <div className="col-lg-6 carouselImgDes">
                    <h4 style={{ color: "white" }}>2000</h4>
                    <h3 style={{ color: "#baa079" }}>IMPROVEMENTS INCLUDE</h3>
                    <p style={{ color: "white" }}>
                      re-development of hike and bike trails along Braes Bayou,
                      aesthetic improvements to Almeda Road as well as
                      modernization of notable homes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              data-bs-target="#RiversideCarousel"
              type="button"
              data-bs-slide="prev">
              {/* <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span> */}
              <span
                className="iconify carousel-control-previous"
                data-icon="eva:arrow-ios-back-fill"
                // style="color: white;"
                data-width="300"
                data-height="300"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              data-bs-target="#RiversideCarousel"
              type="button"
              data-bs-slide="next">
              {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
              <span
                className="iconify"
                data-icon="eva:arrow-ios-forward-fill"
                // style="color: white;"
                data-width="300"
                data-height="300"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="center row historyBlock">
          <div className="col-md-3 historyGrid">
            HISTORIC
            <br /> HOMES
          </div>
          <div className="col-md-3 historyGrid">
            NOTABLE <br />
            PEOPLE
          </div>
          <div className="col-md-3 historyGrid">
            NOTABLE
            <br /> ARCHITECTS
          </div>
        </div>
        <div className="center row historyBlock">
          <div className="col-md-3 historyGrid">
            LIVING IN
            <br /> RIVERSIDE
            <br /> TERRACE
          </div>
          <div className="col-md-3 historyGrid">
            CITY <br />
            COUNCIL
          </div>
          <div className="col-md-3 historyGrid">
            HOLIDAY
            <br /> LIGHTS
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default History;
