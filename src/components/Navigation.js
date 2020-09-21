import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { BsAward, BsCodeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="site-nav family-sans navbar navbar-expand-lg sticky-top bg-dark navbar-dark higher">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        <BsAward className="mr-1" />
        My Overview
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-link" to="/about">
            About Me
          </Link>
          <Link className="nav-link" to="/showroom">
            <BrowserView>
              <BsCodeSlash className="mr-1" />
              My Work
            </BrowserView>
            <MobileView>My Work</MobileView>
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
