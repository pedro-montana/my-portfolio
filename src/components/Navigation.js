import React, { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { GiMushroomHouse } from "react-icons/gi";
import { Link } from "react-router-dom";
import ComingSoonModal from "./ComingSoonModal";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ReactTooltip from "react-tooltip";

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
  const [isVideos, setVideos] = useState(false);

  if (localStorage.getItem("myLanguage") == null) {
    localStorage.setItem("myLanguage", "cz");
  }
  if (value === "gb") {
    var about = "About Me";
    var home = "Home";
    var homeTip = "Home";
    var showroom = "My Work";
    var showroomTip = "My Work";
    var contact = "Contact";
    var articles = "Articles";
    var language = "Language";
    var videos = "Videos";
  }
  else {
    var about = "O mně";
    var home = "Domů";
    var homeTip = "Domů";
    var showroom = "Mé ukázky";
    var showroomTip = "Mé ukázky";
    var contact = "Kontakt";
    var articles = "Články";
    var language = "Jazyk";
    var videos = "Videa";
  }
  const selectedPage = "text-warning";
  const blogNavMargin = "";

  setInterval(function () {
    if (window.location.href.includes("/my-portfolio/about")) {
      setAbout(true);
    } else {
      setAbout(false);
    }
    if (window.location.href.includes("/my-portfolio/showroom")) {
      setShowroom(true);
    } else {
      setShowroom(false);
    }
    if (window.location.href.includes("/my-portfolio/contact")) {
      setContact(true);
    } else {
      setContact(false);
    }
    if (window.location.href.includes("/my-portfolio/blog")) {
      setBlog(true);
    } else {
      setBlog(false);
    }
    if (window.location.href.includes("/my-portfolio/blog/blog-about")) {
      setBlogAbout(true);
    } else {
      setBlogAbout(false);
    }
    if (window.location.href.includes("/my-portfolio/blog/article")) {
      setArticle(true);
    } else {
      setArticle(false);
    }    
    if (window.location.href.includes("/my-portfolio/videos")) {
      setVideos(true);
    } else {
      setVideos(false);
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
          to="/my-portfolio/"
          id="button2"
          className="navbar-brand text-warning btn btn-outline-light"
          onClick={() => {
            setExpanded(expanded ? false : "");
            setAbout(false);
            setShowroom(false);
            setContact(false);
          }}
          data-tip={homeTip}
          data-place="bottom"
        >
          <GiMushroomHouse className="mx-auto mb-1" size="25" />
        <span className="mobile-only">{home}</span>
        </Link>
        <ReactTooltip effect="solid" arrowColor="transparent" />

        <span
          className={
            document.location.href.includes("/my-portfolio/blog") || isBlog
              ? "mobile-only btn-lg"
              : "d-none"
          }
        >
          BLOG
        </span>
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
              (document.location.href.includes("/my-portfolio/about") || isAbout
                ? `${selectedPage}`
                : "text-white")
            }
            to="/my-portfolio/about"
            onClick={() => {
              setExpanded(false);
            }}
            data-tip={about}
            data-place="bottom"
          >
            {about}
            <ReactTooltip effect="solid" arrowColor="transparent" />
          </Link>
          <Link
            className={
              `nav-link ` +
              (document.location.href.includes("/my-portfolio/showroom") || isShowroom
                ? `${selectedPage}`
                : "text-white")
            }
            to="/my-portfolio/showroom"
            onClick={() => {
              setExpanded(false);
            }}
            data-tip={showroomTip}
            data-place="bottom"
          >
            {showroom} <BsCodeSlash className="mr-1" />
            <ReactTooltip effect="solid" arrowColor="transparent" />
          </Link>
          <Link
            className={
              `nav-link ` +
              (document.location.href.includes("/my-portfolio/contact") || isContact
                ? `${selectedPage}`
                : "text-white")
            }
            to="/my-portfolio/contact"
            onClick={() => {
              setExpanded(false);
            }}
            data-tip={contact}
            data-place="bottom"
          >
            {contact}
            <ReactTooltip effect="solid" arrowColor="transparent" />
          </Link>

          {/* VIDEO */}
          <Link
            className={
              `nav-link ` +
              (document.location.href.includes("/my-portfolio/videos") || isVideos
                ? `${selectedPage}`
                : "text-white")
            }
            to="/my-portfolio/videos"
            onClick={() => {
              setExpanded(false);
            }}
            data-tip={videos}
            data-place="bottom"
          >
            {videos}
            <ReactTooltip effect="solid" arrowColor="transparent" />
          </Link>
          {/* VIDEO */}

          {/* BLOG CONTENT */}
          <NavDropdown
            title={<span className={document.location.href.includes("/my-portfolio/blog") ? "text-warning" : "text-white"}
            data-tip="Blog"
            data-place="right"
            data-offset="{'right':15}">
              Blog
            <ReactTooltip effect="solid" arrowColor="transparent" />
            </span>}
            id={document.location.href.includes("/my-portfolio/blog") || isBlog ? "blog-nav" : ""}
            className={
              document.location.href.includes("/my-portfolio/blog") || isBlog
                ? `${selectedPage}`
                : ""
            }
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <NavDropdown.Item />
            <NavDropdown.Item className={blogNavMargin}>
              <Link
                className="text-dark"
                to="/my-portfolio/blog"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                <Button variant="white" className="w-100">
                  {home}
                </Button>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className={blogNavMargin}>
              <Link
                className="text-dark"
                to="/my-portfolio/blog/blog-about"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                <Button variant="white" className="w-100">
                  {about}
                </Button>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className={blogNavMargin}>
              <Link
                className="text-dark"
                to="/my-portfolio/blog/articles-list"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                <Button variant="white" className="w-100">
                  {articles}
                </Button>
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
                  src={value === "cz" ? FlagCZ : value === "gb" ? FlagGB : FlagCZ}
                  width="24"
                  alt="Language"
                  data-tip={language}
                  data-place="left"
                />
                <ReactTooltip effect="solid" arrowColor="transparent" />
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
              className={value === "cz" ? "d-none" : ""}
            >
              <>
                <img src={FlagCZ} width="24" alt="Čeština" /> Čeština
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
              className={value === "gb" ? "d-none" : ""}
            >
              <>
                <img src={FlagGB} width="24" alt="English" /> English
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
