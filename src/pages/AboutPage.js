import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    var heading = "I'm Petr";
    var subheading = "This web is an example of my personal works.";
    var body =
      "For almost a year now I've been working as a web content editor. Among my responsibilities is to provide the best service of maintaining website for our main client, one of the biggest world's car manufacturers.";
  } else {
    var heading = "Jmenuji se Petr";
    var subheading = "Tyto stránky jsou ukázkou mé osobní práce.";
    var body = "Už téměr rok pracuji jako web content editor v\u00a0přední digitální agentuře v\u00a0České republice. Mezi mé povinnosti patří poskytnout kvalitní služby našemu klientovi, jedné z nějvětších světových automobilek."
       }

  return (
    <>
      <img className="d-block w-100" src={smallPic} alt="Vyšehrad" fluid />

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
            <h2 className="mb-2">{heading}</h2>
            <p>{subheading}</p>
            <p>{body}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutPage;
