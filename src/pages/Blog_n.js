import React from "react";
import { Link } from "react-router-dom";
import NavBlog from "../components/blog/components/NavBlog";

import Button from "react-bootstrap/Button";

const buttonVariant = "secondary";
const HomePage = () => (
  <div id="blog-body">
    <NavBlog />
    <h1>Hello, welcome to my blog!</h1>
    <p>Blog example.</p>
    <div>
      <Link to="/blog/blog-about" className="mx-2">
        <Button variant={buttonVariant}>About Me</Button>
      </Link>
      <Link to="/blog/articles-list" className="mx-2">
        <Button variant={buttonVariant}>My Articles</Button>
      </Link>
    </div>
  </div>
);

export default HomePage;
