import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

const buttonVariant = "dark";

const NavBlog = () => (
  <>
    <div id="nav-blog" className="d-flex mb-1">
      <Link to="/blog" className="mx-2">
        <Button variant={buttonVariant}>Home</Button>
      </Link>
      <Link to="/blog/blog-about" className="mx-2">
        <Button variant={buttonVariant}>About</Button>
      </Link>
      <Link to="/blog/articles-list" className="mx-2">
        <Button variant={buttonVariant}>Articles</Button>
      </Link>
      <Link to="/showroom" className="mx-2">
        <Button variant="outline-dark">Exit</Button>
      </Link>
    </div>
    <hr/>
    </>
)

export default NavBlog;