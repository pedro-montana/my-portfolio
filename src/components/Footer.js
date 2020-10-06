import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
//import { Link } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import ReactTooltip from "react-tooltip";

//import { Link } from "react-router-dom";

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

function Footer () {
  const [value, setValue] = useStateWithLocalStorage("myLanguage");

  if (value === "gb") {
    var phoneTip = "Phone";
  } else {
    var phoneTip = "Volat";
  }
  return(
  <>
    <BrowserView>
      <footer
        className="page-footer site-footer font-small blue  py-3"
        style={{
          width: "99.93%",
          maxWidth: "1400px",
        }}
      >
        <div className="footer-copyright text-center text-light">
          {/* © 2020:{" "}
          <a
            href="https://github.com/pedro-montana"
            rel="noopener noreferrer"
            target="_blank"
          >
            Petr Horáček
          </a> */}
          <span
            className="text-black badge badge-light"
          >
            © 2020 Petr Horáček
          </span>
          <a
            className="text-white"
            href="https://github.com/pedro-montana"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub className="ml-5" size={20} data-tip="GitHub" />
            <ReactTooltip effect="solid" arrowColor="transparent"  />
          </a>
          <a
            className="text-white"
            href="https://www.linkedin.com/in/petr-horáček-76904b1b7"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin className="ml-4" size={20} data-tip="LinkedIn" />
            <ReactTooltip effect="solid" arrowColor="transparent"  />
          </a>
          <a
            className="text-white"
            href="mailto:petrhoracek02@gmail.com"
            rel="noopener noreferrer"
            target="_blank"

          >
            <GrMail className="ml-4" size={20} data-tip="Email" />
            <ReactTooltip effect="solid" arrowColor="transparent"  />
          </a>
          <a
            className="text-white"
            href="tel:00420739840847"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaPhone className="ml-4" size={19} data-tip={phoneTip} />
            <ReactTooltip effect="solid" arrowColor="transparent"  />
          </a>
        </div>
      </footer>
    </BrowserView>
    <MobileView>
      <footer className="page-footer site-footer bg-dark font-small blue  py-3">
        <div className="footer-copyright text-center text-light">
          <span
            className="text-black badge-pill badge-light"
          >
            © 2020
          </span>
          <a
            className="text-white"
            href="https://github.com/pedro-montana"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub"
          >
            <FaGithub className="ml-4" size={20} />
          </a>
          <a
            className="text-white"
            href="https://www.linkedin.com/in/petr-horáček-76904b1b7"
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <FaLinkedin className="ml-4" size={20} />
          </a>
          <a
            className="text-white"
            href="mailto:petrhoracek02@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Email"
          >
            <GrMail className="ml-4" size={20} />
          </a>
          <a
            className="text-white"
            href="tel:00420739840847"
            rel="noopener noreferrer"
            target="_blank"
            title="Phone"
          >
            <FaPhone className="ml-4" size={19} />
          </a>
        </div>
      </footer>
    </MobileView>
  </>
  );}

export default Footer;
