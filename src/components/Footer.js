import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
//import { Link } from "react-router-dom";
import { GrMail } from "react-icons/gr";

//import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <footer className="page-footer bg-dark font-small blue">
      <BrowserView>
        <div className="footer-copyright text-center text-light py-3">
          © 2020:{" "}
          <a
            href="https://github.com/pedro-montana"
            rel="noopener noreferrer"
            target="_blank"
          >
            Petr Horáček
          </a>
          <a
            className="text-white"
            href="https://github.com/pedro-montana"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub className="ml-5" size={20} />
          </a>
          <a
            className="text-white"
            href="https://www.linkedin.com/in/petr-horáček-76904b1b7"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin className="ml-4" size={20} />
          </a>
          <a
            className="text-white"
            href="mailto:petrhoracek02@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GrMail className="ml-4" size={20} />
          </a>
          <a
            className="text-white"
            href="tel:00420739840847"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaPhone className="ml-4" size={19} />
          </a>
        </div>
      </BrowserView>
      <MobileView>
        <div className="footer-copyright text-left text-light py-3 ml-3">
          ©{" "}
          <a
            href="https://github.com/pedro-montana"
            rel="noopener noreferrer"
            target="_blank"
          >
            Petr Horáček
          </a>
          <a
            className="text-white"
            href="tel:00420739840847"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaPhone className="float-right mr-4" size={17} />
          </a>
          <a
            className="text-white"
            href="mailto:petrhoracek02@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GrMail className="float-right mr-4" size={18} />
          </a>
          <a
            className="text-white"
            href="https://www.linkedin.com/in/petr-horáček-76904b1b7"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin className="float-right mr-4" size={18} />
          </a>
          <a
            className="text-white"
            href="https://github.com/pedro-montana"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub className="float-right mr-4" size={18} />
          </a>
        </div>
      </MobileView>
    </footer>
  </>
);

export default Footer;
