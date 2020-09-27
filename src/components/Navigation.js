import React, { useState } from "react";
import { BsAward, BsCodeSlash } from "react-icons/bs";
import { GiMushroomHouse } from "react-icons/gi";
import { Link } from "react-router-dom";
import ComingSoonModal from "./ComingSoonModal";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import FlagCZ from "../img/flags/CZ.png";
import FlagGB from "../img/flags/GB.png";
import FlagDE from "../img/flags/DE.png";

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

function Navigation() {
  const [expanded, setExpanded] = useState(false);

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

  const [value, setValue] = useStateWithLocalStorage("myLanguage");
  const [isGB, setGB] = useState(false);
  const [isCZ, setCZ] = useState(false);

  const [isDE, setDE] = useState(false);

  return (
    <Navbar
      style={{ backgroundColor: "#4682B4" }}
      variant="dark"
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Brand>
        <Link
          to="/"
          id="button2"
          className="navbar-brand text-warning btn btn-outline-light"
          title="Home"
        >
          <GiMushroomHouse className="mx-auto mb-1" size="25" />
          <span className="mobile-only">Home</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-end">
          <Link
            className="nav-link text-white"
            to="/about"
            onClick={() => setExpanded(false)}
          >
            About Me
          </Link>
          <Link
            className="nav-link text-white"
            to="/showroom"
            onClick={() => setExpanded(false)}
          >
            My Work <BsCodeSlash className="mr-1" />
          </Link>
          <Link
            className="nav-link text-white"
            to="/contact"
            onClick={() => setExpanded(false)}
          >
            Contact
          </Link>
        </Nav>
        <Nav>
          <NavDropdown
            title={
              <>
                <img
                  src={value == "cz" ? FlagCZ : value == "gb" ? FlagGB : FlagCZ}
                  width="24"
                />
              </>
            }
            id="basic-nav-dropdown"
            style={width < 900 ? {} : { paddingLeft: "120px", right: "30px" }}
          >
            <NavDropdown.Item
              onClick={() => {
                setCZ(true);
                setGB(false);
                setDE(false);
                localStorage.setItem("myLanguage", "cz");
                window.location.reload();
              }}
              className={value == "cz" ? "d-none" : ""}
            >
              <>
                <img src={FlagCZ} width="24" /> Čeština
              </>
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                setGB(true);
                setCZ(false);
                setDE(false);
                localStorage.setItem("myLanguage", "gb");
                window.location.reload();
              }}
              className={value == "gb" ? "d-none" : ""}
            >
              <>
                <img src={FlagGB} width="24" /> English
              </>
            </NavDropdown.Item>
            <NavDropdown.Item>
                {/* <img src={FlagDE} width="24" /> */}
                <ComingSoonModal />
            </NavDropdown.Item>

          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
