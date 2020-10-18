import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentManager from "./AppointmentManager";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ReactTooltip from "react-tooltip";
import ToHeadingButton from "../components/ToHeadingButton";
import {BiBadgeCheck} from "react-icons/bi";

import projectPic from "../img/pedro-projects-3x1-2160x1215-projects-logo.jpg";
import formPic from "../img/pedro-form_example-16x9-767x431-vet-appointments.jpg";
import blogPic from "../img/pedro-my_blog-16x9-767x431-blog-screenshot.jpg";
import projectPicSmall from "../img/pedro-projects-16x9-2160x720-projects-logo.jpg";

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

function Showroom() {
  const [value, setValue] = useStateWithLocalStorage("myLanguage");
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
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

  if (value === "gb") {
    var heading = "My Work";
    var vetAppointments = "Vet Appointments";
    var dog = "A dog is a man's best friend.";
    var setAppointment = "Set an Appointment";
    var blogExample = "Blog Example";
    var blogBody = "When you need to tell the World everything.";
    var visitBlog = "Visit My Blog";
    var bott = "In case of any questions feel free to ";
    var conMe = "Contact Me";
    var videosExample = "Video Page";
    var videosBody = "Explore beautiful details of the world.";
    var visitVideos = "Visit Videos";
    var certTitle = "Certificates";
    var certBody = "Steps of Learning React.";
    var visitCert = "View Certificates";
  } else {
    var heading = "Moje Práce";
    var vetAppointments = "Návstěva Veterináře";
    var dog = "Pes je nejlepší přítel člověka.";
    var setAppointment = "Domluvit schůzku";
    var blogExample = "Ukázka blogu";
    var blogBody = "Když musíte světu říci všechno.";
    var visitBlog = "Do mého blogu";
    var bott = "V případě jakýchkoliv dotazů mě prosím ";
    var conMe = "kontaktujte";
    var videosExample = "Videa";
    var videosBody = "Objevte nádherné detaily světa.";
    var visitVideos = "K Videím";
    var certTitle = "Certifikáty";
    var certBody = "Progres ve studiu Reactu.";
    var visitCert = "Zobrazit certifikáty";
  }
  React.useEffect(() => {
    if (value === "gb") {
      document.title = "My Work | My Portfolio";
    } else document.title = "Mé ukázky | My Portfolio";
  });

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
            data-tip="Showroom"
            data-place="bottom"
          >
            Close Appointments
            <ReactTooltip effect="solid" arrowColor="transparent" />
          </Button>
          <hr />
          <AppointmentManager />
        </>
      ) : (
        <>
          <Container className="mt-1">
            <ToHeadingButton headingHash="sh-heading" topOffset="-80px" />
            <h1 id="sh-heading" className="font-weight-light">
              {heading}
            </h1>
          </Container>
          <div className="container-fluid mb-5">
            <div className="row justify-content-md-center mt-5">
              <Card className="mx-auto card-bg mt-2" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={formPic} />
                <Card.Body>
                  <Card.Title>{vetAppointments}</Card.Title>
                  <Card.Text>{dog}</Card.Text>
                  <Button variant="primary" onClick={onClick}>
                    {setAppointment}
                  </Button>
                </Card.Body>
              </Card>
              <Card className="mx-auto card-bg mt-2" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={blogPic} />
                <Card.Body>
                  <Card.Title>{blogExample}</Card.Title>
                  <Card.Text>{blogBody}</Card.Text>
                  <Link to="/my-portfolio/blog">
                    <Button variant="primary">{visitBlog}</Button>
                  </Link>
                </Card.Body>
              </Card>
              <Card className="mx-auto card-bg mt-2" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="http://orangevalleycaa.org/api/media/images/thumbs/BalletInSmoke_054599628.png"
                />
                <Card.Body>
                  <Card.Title>{videosExample}</Card.Title>
                  <Card.Text>{videosBody}</Card.Text>
                  <Link to="/my-portfolio/videos">
                    <Button variant="primary">{visitVideos}</Button>
                  </Link>
                </Card.Body>
              </Card>
              <Card className="mx-auto card-bg mt-2" style={{ width: "18rem" }}>
                <BiBadgeCheck className="mt-2 mx-auto text-success" size="140" />
                <Card.Body>
                  <Card.Title className="mt-4">{certTitle}</Card.Title>
                  <Card.Text>{certBody}</Card.Text>
                  <Link to="/my-portfolio/learning">
                    <Button variant="primary">{visitCert}</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </>
      )}
      <div className="mx-auto mt-5 mb-3">
        {bott}
        <Link to="/my-portfolio/contact">{conMe}</Link>
      </div>
    </>
  );
}

export default Showroom;
