import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import nyPic from "../img/pedro-NY_CITY_unsplash-3x2-6000x4000-bb-time-square-night-view.jpg";
import officePic from "../img/pedro-random_sky_h4R3PbcX8qw_unsplash-1x1-1215x1215-office-building.jpg";
import nightPic from "../img/pedro-geoffroy_hauwen_VjQDAWnIwBY_unsplash-1x1-1215x1215-night-view-city.jpg";
import womanPic from "../img/pedro-enzo_silva_fH_3WEB6Yw_unsplash-1x1-1215-woman-in-brasil-town.jpg";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  render() {
    //let whatIcon = this.state.icon ? <IoIosArrowForward /> : <IoIosArrowDown />;
    return (
      <>
        <Jumbotron>
          <BrowserView>
            <img
              className="mb-2"
              src={nyPic}
              //width="70%"
              max-width="2160px"
              alt="Time Square at night"
            />
          </BrowserView>
          <MobileView>
            <img
              className="mb-2 img-fluid card-img-top"
              src={nyPic}
              width="100%"
              max-width="2160px"
              alt="Time Square at night"
            />
          </MobileView>
          
            <BrowserView>
              <a href="#hp-heading">
                <button
                  type="button"
                  className="btn btn-outline-light mt-5"
                  onClick={this.handleClick}
                >
                  <h1 className="header">
                    {this.state.isToggleOn ? (
                      <IoIosArrowForward />
                    ) : (
                      <IoIosArrowDown />
                    )}
                    My Portfolio
                  </h1>
                </button>
              </a>
            </BrowserView>
            <MobileView>
              <a href="#hp-heading" className="">
                <button type="button" className="btn btn-outline-light">
                  <h1 className="my-bottom-text display-4 card-title font-weight-heavy m-3">
                    My Portfolio
                  </h1>
                </button>
              </a>
            </MobileView>
          
        </Jumbotron>
        <h2 id="hp-heading" className="font-weight-light m-3">
          Hello, I'm Petr
        </h2>
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col">
              <Link to="/about">
                <div className="card my-card m-3 mx-auto">
                  <img src={officePic} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <button type="button" className="btn btn-info">
                      <h2 className="display-5 font-weight-light">About Me</h2>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/showroom">
                <div className="card my-card m-3 mx-auto">
                  <img src={nightPic} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <button type="button" className="btn btn-info">
                      <h2 className="display-5 font-weight-light">Portfolio</h2>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/contact">
                <div className="card my-card m-3 mx-auto">
                  <img src={womanPic} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <button type="button" className="btn btn-info">
                      <h2 className="display-5 font-weight-light">
                        Contact Me
                      </h2>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
