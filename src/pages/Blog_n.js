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
    
  </div>
);

export default HomePage;
