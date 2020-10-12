import React from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { SiMailDotRu } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import ToHeadingButton from "../components/ToHeadingButton";

import phoneBoothPic from "../img/pedro-phone_booth-3x1-2160x720-bb.jpg";
import phoneBoothPicSmall from "../img/pedro-phone_booth-16x9-2160x1215-bb.jpg";

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

function Contact() {
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
    smallPic = phoneBoothPic;
  } else {
    smallPic = phoneBoothPicSmall;
  }

  var heading = "Contact";
  var subheading = "Feel free to contact me:";
  var phone = "Phone";

  if (value === "gb") {
    heading = "Contact";
    subheading = "Feel free to contact me:";
    phone = "Phone";
  } else {
    heading = "Kontakt";
    subheading = "V případě zájmu mě neváhejte kontaktovat na:";
    phone = "Mobil";
  }
  React.useEffect(() => {
    if (value === "gb") {
    document.title="Contact | My Portfolio";}
    else
    document.title="Kontakt | My Portfolio";
    })

  return (
    <>
      <img className="d-block w-100" src={smallPic} alt="First slide" fluid />
      <Container className="p-5">
        <ToHeadingButton headingHash="c-heading" topOffset="-110px" />
        <h1 id="c-heading" className="font-weight-light m-3">{heading}</h1>
      </Container>
      <h4>{subheading}</h4>
      <CardColumns className="mt-5">
        <a
          href="tel:00420739840847"
          rel="noopener noreferrer"
          target="_blank"
          title={phone}
          className="text-dark"
        >
          <Card className="py-5">
            <h3 className="mt-3">{phone}</h3>
            <FcPhoneAndroid size="40" className="mt-3 mx-auto" />
          </Card>
        </a>
        <a
          href="mailto:petrhoracek02@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          title="Email"
          className="text-dark"
        >
          <Card className="py-5">
            <h3 className="mt-3">Email</h3>
            <SiMailDotRu size="40" className="mt-3 text-dark mx-auto" />
          </Card>
        </a>
        <a
          href="https://www.linkedin.com/in/petr-hor%C3%A1%C4%8Dek-76904b1b7"
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
          className="text-dark"
        >
          <Card className="py-5">
            <h3 className="mt-3">LinkedIn</h3>
            <FiLinkedin size="40" className="mt-3 text-dark mx-auto" />
          </Card>
        </a>
      </CardColumns>
    </>
  );
}

export default Contact;
