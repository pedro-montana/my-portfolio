import React, { useState, useEffect } from "react";
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

  const [isAbout, setAbout] = useState(false);
  const [isShowroom, setShowroom] = useState(false);
  const [isContact, setContact] = useState(false);
  const [isBlog, setBlog] = useState(false);
  const [isBlogAbout, setBlogAbout] = useState(false);
  const [isArticle, setArticle] = useState(false);

  if (localStorage.getItem("myLanguage") == null) {
    localStorage.setItem("myLanguage", "cz");
  }
  const selectedPage = "text-warning";
  const blogNavMargin = "";

  setInterval(function () {
    if (window.location.href.includes("/about")) {
      setAbout(true);
    } else {
      setAbout(false);
    }
    if (window.location.href.includes("/showroom")) {
      setShowroom(true);
    } else {
      setShowroom(false);
    }
    if (window.location.href.includes("/contact")) {
      setContact(true);
    } else {
      setContact(false);
    }
    if (window.location.href.includes("/blog")) {
      setBlog(true);
    } else {
      setBlog(false);
    }
    if (window.location.href.includes("/blog/blog-about")) {
      setBlogAbout(true);
    } else {
      setBlogAbout(false);
    }
    if (window.location.href.includes("/blog/article")) {
      setArticle(true);
    } else {
      setArticle(false);
    }
  }, 300);

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
          onClick={() => {
            setExpanded(expanded ? false : "");
            setAbout(false);
            setShowroom(false);
            setContact(false);
          }}
        >
          <GiMushroomHouse className="mx-auto mb-1" size="25" />
          <span className="mobile-only">Home</span>
        </Link>
        <span className={document.location.href.includes("/blog") || isBlog ? "mobile-only btn-lg" : "d-none"}>BLOG</span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-end">
          <Link
            className={
              `nav-link ` +
              (document.location.href.includes("/about") || isAbout
                ? `${selectedPage}`
                : "text-white")
            }
            to="/about"
            onClick={() => {
              setExpanded(false);
            }}
          >
            About Me
          </Link>
          <Link
            className={
              `nav-link ` +
              (document.location.href.includes("/showroom") || isShowroom
                ? `${selectedPage}`
                : "text-white")
            }
            to="/showroom"
            onClick={() => {
              setExpanded(false);
            }}
          >
            My Work <BsCodeSlash className="mr-1" />
          </Link>
          <Link
            className={
              `nav-link ` +
              (document.location.href.includes("/contact") || isContact
                ? `${selectedPage}`
                : "text-white")
            }
            to="/contact"
            onClick={() => {
              setExpanded(false);
            }}
          >
            Contact
          </Link>

          {/* BLOG CONTENT */}
          <NavDropdown
            title={<span className="text-warning">Blog</span>}
            id="blog-nav"
            className={
              document.location.href.includes("/blog") || isBlog
                ? `${selectedPage}`
                : "d-none"
            }
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <NavDropdown.Item />
            <NavDropdown.Item className={blogNavMargin}>
              <Link
                className="text-dark"
                to="/blog"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                <Button variant="white" className="w-100">Home</Button>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className={blogNavMargin}>
              <Link
                className="text-dark"
                to="/blog/blog-about"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                <Button variant="white" className="w-100">About</Button>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className={blogNavMargin}>
              <Link
                className="text-dark"
                to="/blog/articles-list"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                <Button variant="white" className="w-100">Articles</Button>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          {/* BLOG CONTENT */}
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
            style={
              width < 900
                ? { marginLeft: "auto", marginRight: "auto" }
                : { paddingLeft: "120px", right: "30px" }
            }
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
              <ComingSoonModal />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
