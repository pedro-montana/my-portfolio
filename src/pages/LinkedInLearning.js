import React from "react";
import CrownJewelsPic from "../img/pedro-crown_jewels-3x1-2160x720-bb.jpg";
import CrownJewelsPicSmall from "../img/pedro-crown_jewels-16x9-2160x1215-bb.jpg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToHeadingButton from "../components/ToHeadingButton";
import { BsTrophy } from "react-icons/bs";

import SPAs from "../docs/CertificateOfCompletion_React_SPAs.pdf";
import FullStack from "../docs/CertificateOfCompletion_React_Creating_and_Hosting_a_FullStack_Site.pdf";
import ReactDeveloper from "../docs/CertificateOfCompletion_Become_a_React_Developer.pdf";
import Interface from "../docs/CertificateOfCompletion_React.js_Building_an_Interface.pdf";
import Essential from "../docs/CertificateOfCompletion_React.js_Essential_Training.pdf";
import Modern from "../docs/CertificateOfCompletion_Building_Modern_Projects_with_React.pdf";

const useStateWithLocalStorage = (localStorageKey) => {
    const [value, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || ""
    );
  
    React.useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);
  
    return [value, setValue];
  };

function LinkedInLearning() {
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
    smallPic = CrownJewelsPic;
  } else {
    smallPic = CrownJewelsPicSmall;
  }
var obtained = "Obtained Certificates";
if (value === "gb")
{
obtained = "Obtained Certificates";
}
else {
obtained = "Získané certifikáty";
}

  const btnClass = "btn btn-primary";
  const colStyle = "mt-3 my-certificate m-auto";
  if (width > 990)
  {return (
    <>
      <img className="d-block w-100" src={smallPic} alt="Crown Jewels" fluid />
      <Container className="pt-5">
        <ToHeadingButton headingHash="l-heading" topOffset="-110px" />
        <h1 id="l-heading" className="font-weight-light">
          {obtained}
        </h1>
      </Container>

      <Container className="my-5">
        <Row>
          <Col>
            <BsTrophy size="70" />
            <h3 className="font-weight-light pt-3">LinkedIn Learning</h3>
          </Col>
        </Row>
        <Row>
          <Col className={colStyle}>
            <h4>React: SPAs</h4>
            <a href={SPAs} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 205KB)</div>
            </a>
          </Col>

          <Col className={colStyle}>
            <h4>React.js: Building an Interface</h4>
            <a href={Interface} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 206KB)</div>
            </a>
          </Col>

          <Col className={colStyle}>
            <h4>React.js Essential Training</h4>
            <a href={Essential} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 206KB)</div>
            </a>
          </Col>

          <Col className={colStyle}>
            <h4>React: Creating and Hosting a Full-Stack Site</h4>
            <a href={FullStack} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 206KB)</div>
            </a>
          </Col>

          <Col className={colStyle}>
            <h4>Become a React Developer</h4>
            <a href={ReactDeveloper} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 184KB)</div>
            </a>
          </Col>
          <Col className={colStyle}>
            <h4>Building Modern Projects with React</h4>
            <a href={Modern} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 206KB)</div>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
  }
  else {
  return (
    <>
      <img className="d-block w-100" src={smallPic} alt="Crown Jewels" fluid />
      <Container className="pt-5">
        <ToHeadingButton headingHash="l-heading" topOffset="-110px" />
        <h1 id="l-heading" className="font-weight-light">
        {obtained}
        </h1>
      </Container>

      <Container className="my-5">
        <Row>
          <Col>
            <BsTrophy size="50" />
            <h3 className="font-weight-light pt-3">LinkedIn Learning</h3>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <h4>React: SPAs</h4>
            <a href={SPAs} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 205KB)</div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <h4>React.js: Building an Interface</h4>
            <a href={Interface} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 206KB)</div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <h4>React.js Essential Training</h4>
            <a href={Essential} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 206KB)</div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <h4>React: Creating and Hosting a Full-Stack Site</h4>
            <a href={FullStack} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 206KB)</div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <h4>Become a React Developer</h4>
            <a href={ReactDeveloper} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 184KB)</div>
            </a>
          </Col>
        </Row>
        <Row>
        <Col className="mt-3">
            <h4>Building Modern Projects with React</h4>
            <a href={Modern} rel="noopener noreferrer" target="_blank">
              <div className={btnClass}>Download (PDF 206KB)</div>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
  }
}

export default LinkedInLearning;
