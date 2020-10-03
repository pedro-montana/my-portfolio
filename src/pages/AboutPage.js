import React from "react";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import vysehradPic from "../img/pedro-vysehrad-3x1-2160x720-bb.jpg";
import vysehradPicSmall from "../img/pedro-vysehrad-16x9-2160x1215-bb.jpg";
import profilePic from "../img/pedro-FB_IMG_1534027292493-1x1-1052x1052-profile-picture.jpg";
import nightPic from "../img/pedro-geoffroy_hauwen_VjQDAWnIwBY_unsplash-1x1-1215x1215-night-view-city.jpg";
import womanPic from "../img/pedro-enzo_silva_fH_3WEB6Yw_unsplash-1x1-1215-woman-in-brasil-town.jpg";

function AboutPage() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  var smallPic;
  if (width > 800) {
    smallPic = vysehradPic;
  } else {
    smallPic = vysehradPicSmall;
  }

  return (
    <>
        <img
          className="d-block w-100"
          src={smallPic}
          alt="First slide"
          fluid
        />
      
      <Container className="my-5">
        <Row>
          <Col id="profile-pic-col">
            <img src={profilePic} id="profile-pic" className="rounded-circle mb-3" />
          </Col>
          <Col>
            <h2 className="mb-2">I'm Petr</h2>
            <p>This page is an example of my personal works.</p>
            <p>
              For almost a year now I've been working as a web content editor.
              Among my responsibilities is to provide the best service of maintaining website for our
              main client, one of the biggest world's car manufacturers.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutPage;
