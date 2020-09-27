import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { FcPhoneAndroid } from "react-icons/fc";
import { SiMailDotRu } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";

import phoneBoothPic from "../img/pedro-phone_booth-3x1-2160x720-bb.jpg";
import phoneBoothPicSmall from "../img/pedro-phone_booth-16x9-2160x1215-bb.jpg";

const Contact = () => (
  <>
    <BrowserView>
      <img
        className="d-block w-100"
        src={phoneBoothPic}
        alt="First slide"
        fluid
      />
    </BrowserView>
    <MobileView>
      <img
        className="d-block w-100"
        src={phoneBoothPicSmall}
        alt="First slide"
        fluid
      />
    </MobileView>
    <Container className="p-5">
      <h1 className="font-weight-light m-3">Contact</h1>
    </Container>
    <h4>Feel free to contact me:</h4>
    <CardColumns className="mt-5">
      <Card className="py-5">
        <h3 className="mt-3">Phone</h3>

        <a
          href="tel:00420739840847"
          rel="noopener noreferrer"
          target="_blank"
          title="Phone"
        >
          <FcPhoneAndroid size="40" className="mt-3" />
        </a>
      </Card>
      <Card className="py-5">
        <h3 className="mt-3">Email</h3>

        <a
          href="mailto:petrhoracek02@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          title="Email"
        >
          <SiMailDotRu size="40" className="mt-3 text-dark" />
        </a>
      </Card>
      <Card className="py-5">
        <h3 className="mt-3">LinkedIn</h3>

        <a
          href="https://www.linkedin.com/in/petr-hor%C3%A1%C4%8Dek-76904b1b7"
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
        >
          <FiLinkedin size="40" className="mt-3 text-dark" />
        </a>
      </Card>
    </CardColumns>
  </>
);

export default Contact;
