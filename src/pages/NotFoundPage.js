import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import errorPic from "../img/pedro-error_dog-3x1-2160x720-bb.jpg";
import errorPicSmall from "../img/pedro-error_dog-16x9-767x431-bb.jpg";

function NotFoundPage () {
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
      smallPic = errorPic;
    } else {
      smallPic = errorPicSmall;
    }
const [is404,  set404] = useState(false);
    React.useEffect(() => {
        if (
          !document.location.href.endsWith("/my-portfolio/") && 
          !document.location.href.endsWith("/my-portfolio") && 
        !document.location.href.endsWith("/my-portfolio/about") && 
        !document.location.href.endsWith("/my-portfolio/about/") && 
        !document.location.href.endsWith("/my-portfolio/showroom") && 
        !document.location.href.endsWith("/my-portfolio/showroom/") && 
        !document.location.href.endsWith("/my-portfolio/contact") && 
        !document.location.href.endsWith("/my-portfolio/contact/") && 
        !document.location.href.endsWith("/my-portfolio/videos/") && 
        !document.location.href.endsWith("/my-portfolio/videos") && 
        !document.location.href.endsWith("/my-portfolio/blog") && 
        !document.location.href.endsWith("/my-portfolio/blog/") && 
        !document.location.href.endsWith("/my-portfolio/blog/blog-about") && 
        !document.location.href.endsWith("/my-portfolio/blog/blog-about/") && 
        !document.location.href.endsWith("/my-portfolio/blog/articles-list") && 
        !document.location.href.endsWith("/my-portfolio/blog/articles-list/") && 
        !document.location.href.includes("/my-portfolio/blog/article/")
        )
{document.title="😕 My Portfolio";
set404(true);
}
else {set404(false);}
})
  if (is404)
  {
    return(
        <>
      <img className="d-block w-100" src={smallPic} alt="First slide" fluid />
      <div id="error-page">
    <h1>404: Page Not Found 😕</h1>
    <h5>Go hard, or</h5>
    <Link to="/my-portfolio/">
        <Button variant="primary" style={{backgroundColor:"rgb(70, 130, 180)"}}>Go Home</Button>
    </Link>
    </div>
    </>
    )}
  else {
    return null;
  }
  };

export default NotFoundPage;