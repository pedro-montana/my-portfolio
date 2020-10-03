import React, { state, useState, useRef, ref } from "react";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import AppointmentManager from "./AppointmentManager";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

import projectPic from "../img/pedro-projects-3x1-2160x1215-projects-logo.jpg";
import formPic from "../img/pedro-form_example-16x9-767x431-vet-appointments.jpg";
import blogPic from "../img/pedro-my_blog-16x9-767x431-blog-screenshot.jpg";
import projectPicSmall from "../img/pedro-projects-16x9-2160x720-projects-logo.jpg";

function Showroom() {
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
    smallPic = projectPic;
  } else {
    smallPic = projectPicSmall;
  }

  const [expanded, setExpanded] = useState(false);
  function goToAnchor() {
    var loc = document.location.toString().split("#")[0];
    document.location = loc + "#appointments";
    return false;
  }

  const onClick = () => {
    setExpanded(!expanded);

    setTimeout(function () {
      goToAnchor();
    }, 100);
  };

  return (
    <>
      <img className="d-block w-100" src={smallPic} alt="First slide" fluid />
      {expanded ? (
        <>
          <Button
            variant="danger"
            id="appointments"
            className="py-3 my-3"
            onClick={onClick}
          >
            Close Appointments
          </Button>
          <hr />
          <AppointmentManager />
        </>
      ) : (
        <>
          <div className="container-fluid mb-5">
            <div className="row justify-content-md-center mt-5">
            <Card className="mx-auto card-bg mt-2" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={formPic} />
              <Card.Body>
                <Card.Title>Vet Appointments</Card.Title>
                <Card.Text>A dog is a man's best friend.</Card.Text>
                <Button variant="primary" onClick={onClick}>
                  Set an Appointment
                </Button>
              </Card.Body>
            </Card>
            <Card className="mx-auto card-bg mt-2" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={blogPic} />
              <Card.Body>
                <Card.Title>Blog Example</Card.Title>
                <Card.Text>
                  When you need to tell the World everything.
                </Card.Text>
                <Link to="/blog">
                <Button variant="primary">Visit My Blog</Button>
                </Link>
              </Card.Body>
            </Card>
            </div>
          </div>
          <div className="mx-auto mt-5 mb-3">
            In case of any questions feel free to{" "}
            <Link to="/contact">Contact Me</Link>
          </div>
        </>
      )}
    </>
  );
}

export default Showroom;
