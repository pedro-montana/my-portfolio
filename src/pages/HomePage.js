import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import ControlledCarousel from "../components/ControlledCarousel";

import officePic from "../img/pedro-office_building_detail_h4R3PbcX8qw_unsplash-16x9-767x431.jpg";
import nightPic from "../img/pedro-geoffroy_hauwen_VjQDAWnIwBY_unsplash-16x9-767x431-night-view-city.jpg";
import womanPic from "../img/pedro-enzo_silva_fH_3WEB6Yw_unsplash-16x9-767x431-woman-in-brasil-town.jpg";
import myPic from "../img/pedro-FB_IMG_1534027292493-16x9-767x431-profile-picture.jpg";

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
    return (
      <>
        <ControlledCarousel />

        <Container id="hp-heading" className="p-5">
          <h1 className="font-weight-light">Welcome</h1>
        </Container>
        <div className="container-fluid mb-5">
          <div className="row justify-content-md-center">
            <div className="col">
              <div className="card my-card m-3 mx-auto bg-light">
                <img
                  src={myPic}
                  className="card-img-top"
                  alt="Office building"
                />
                <div className="card-body">
                  <h5 className="mb-3">A few words about myself.</h5>
                  <Link to="/about">
                    <Button variant="outline-success">About Me</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <Card className="card my-card m-3 mx-auto bg-light">
                <img
                  src={nightPic}
                  className="card-img-top"
                  alt="City in night"
                />
                <div className="card-body">
                  <h5 className="mb-3">Take a look at my work.</h5>
                  <Link to="/showroom">
                    <Button variant="outline-success">Portfolio</Button>
                  </Link>
                </div>
              </Card>
            </div>
            <div className="col">
              <div className="card my-card m-3 mx-auto bg-light">
                <img
                  src={womanPic}
                  className="card-img-top"
                  alt="Woman with building in the background"
                />
                <div className="card-body">
                  <h5 className="mb-3">Get in touch.</h5>
                  <Link to="/contact">
                    <Button variant="outline-success">Contact Me</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
