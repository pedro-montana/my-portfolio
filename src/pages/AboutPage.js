import React from "react";
//import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import nyPic from "../img/pedro-NY_CITY_unsplash-3x2-6000x4000-bb-time-square-night-view.jpg";
import officePic from "../img/pedro-random_sky_h4R3PbcX8qw_unsplash-1x1-1215x1215-office-building.jpg";
import nightPic from "../img/pedro-geoffroy_hauwen_VjQDAWnIwBY_unsplash-1x1-1215x1215-night-view-city.jpg";
import womanPic from "../img/pedro-enzo_silva_fH_3WEB6Yw_unsplash-1x1-1215-woman-in-brasil-town.jpg";

const AboutPage = () => (
  <>
    <BrowserView>
      <img
        className="mb-2"
        src={nyPic}
        width="60%"
        max-width="2160px"
        alt="Time Square at night"
      />
    </BrowserView>
    <MobileView>
      <img
        className="mb-2 img-fluid card-img-top"
        src={nyPic}
        width="80%"
        alt="Time Square at night"
      />
    </MobileView>
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="col">
          <div className="card my-card m-3 mx-auto">
            <img src={officePic} className="card-img-top" alt="..." />
            <div className="card-body">
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-card m-3 mx-auto">
            <img src={nightPic} className="card-img-top" alt="..." />
            <div className="card-body">
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-card m-3 mx-auto">
            <img src={womanPic} className="card-img-top" alt="..." />
            <div className="card-body">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutPage;
