import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import ControlledCarousel from "../components/ControlledCarousel";

import nightPic from "../img/pedro-geoffroy_hauwen_VjQDAWnIwBY_unsplash-16x9-767x431-night-view-city.jpg";
import womanPic from "../img/pedro-enzo_silva_fH_3WEB6Yw_unsplash-16x9-767x431-woman-in-brasil-town.jpg";
import myPic from "../img/pedro-FB_IMG_1534027292493-16x9-767x431-profile-picture.jpg";
import { getByAltText } from "@testing-library/react";

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

function HomePage() {
  const [value, setValue] = useStateWithLocalStorage("myLanguage");
  var welcome = "Welcome";
  var aboutBtn = "About Me";
  var portBtn = "Portfolio";
  var contBtn = "Contact Me";
  var aboutIntro = "A few words about myself.";
  var showIntro = "Take a look at my work.";
  var contIntro = "Get in touch.";

  if (value === "gb") {
    welcome = "Welcome";
    aboutBtn = "About Me";
    portBtn = "Portfolio";
    contBtn = "Contact Me";
    aboutIntro = "A few words about myself.";
    showIntro = "Take a look at my work.";
    contIntro = "Get in touch.";
  } else {
    welcome = "Vítejte";
    aboutBtn = "O mně";
    portBtn = "Moje portfolio";
    contBtn = "Kontaktuje mě";
    aboutIntro = "Pár slov o mně.";
    showIntro = "Prozkoumejte moji práci.";
    contIntro = "Zůstat ve spojení.";
  }
  return (
    <>
      <ControlledCarousel />

      <Container id="hp-heading" className="p-5">
        <h1 className="font-weight-light">{welcome}</h1>
      </Container>
      <div className="container-fluid mb-5">
        <div className="row justify-content-md-center">
          <div className="col">
            <div className="card my-card m-3 mx-auto bg-light">
              <img src={myPic} className="card-img-top" alt="Office building" />
              <div className="card-body">
                <h5 className="mb-3">{aboutIntro}</h5>
                <Link to="/about">
                  <Button variant="outline-success">{aboutBtn}</Button>
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
                <h5 className="mb-3">{showIntro}</h5>
                <Link to="/showroom">
                  <Button variant="outline-success">{portBtn}</Button>
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
                <h5 className="mb-3">{contIntro}</h5>
                <Link to="/contact">
                  <Button variant="outline-success">{contBtn}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
