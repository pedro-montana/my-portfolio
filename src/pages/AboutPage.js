import React from "react";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ToHeadingButton from "../components/ToHeadingButton";
import vysehradPic from "../img/pedro-vysehrad-3x1-2160x720-bb.jpg";
import vysehradPicSmall from "../img/pedro-vysehrad-16x9-2160x1215-bb.jpg";
import profilePic from "../img/pedro-FB_IMG_1534027292493-1x1-1052x1052-profile-picture.jpg";

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

function AboutPage() {
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
    smallPic = vysehradPic;
  } else {
    smallPic = vysehradPicSmall;
  }

  if (value === "gb") {
    var about = "About Me";
    var heading = "I'm Petr";
    var subheading = "This web is an example of my";
    var subheading2 = "Take a look at my";
    var certificates = "certificates";
    var persWork = "personal works";
    var body =
      "For almost a year now I've been working as a web content editor. Among my responsibilities is to provide the best service of maintaining website for our main client, one of the biggest world's car manufacturers.";
    var body2 =
      "I learn React in my free time. I like it for it is backed by a strong community and especially helpful with specific errors.";
  } else {
    var about = "O mně";
    var heading = "Jmenuji se Petr";
    var subheading = "Tyto stránky jsou ukázkou mé";
    var subheading2 = "Zobrazit";
    var certificates = "certifikáty";
    var persWork = "osobní práce";
    var body =
      "Už téměr rok pracuji jako web content editor v\u00a0přední digitální agentuře v\u00a0České republice. Mezi mé povinnosti patří poskytnout kvalitní služby našemu klientovi, jedné z nějvětších světových automobilek.";
    var body2 =
      "React se učím se volném čase. Líbí se mi kvůli silné komunitě, která za ním stojí a díky jeho specifickým errorům, když se něco nepovede.";
  }

  React.useEffect(() => {
    if (value === "gb") {
      document.title = "About Me | My Portfolio";
    } else document.title = "O mně | My Portfolio";
  });

  return (
    <>
      <img className="d-block w-100" src={smallPic} alt="Vyšehrad" fluid />
      <Container className="pt-5">
        <ToHeadingButton headingHash="a-heading" topOffset="-110px" />
        <h1 id="a-heading" className="font-weight-light">
          {about}
        </h1>
      </Container>

      <Container className="my-5">
        <Row>
          <Col id="profile-pic-col">
            <img
              src={profilePic}
              id="profile-pic"
              className="rounded-circle mb-3"
              alt="Profile pic"
            />
          </Col>
          <Col>
            <h2 className="mb-2 font-weight-light">{heading}</h2>
            <h5 className="font-weight-light">
              {subheading} <Link to="/my-portfolio/showroom">{persWork}</Link>.
            </h5>
            <p>{body}</p>
            <p>{body2}</p>
  <p>{subheading2} <Link to="/my-portfolio/learning">{certificates}</Link>.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutPage;
