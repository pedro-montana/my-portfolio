import React from 'react';
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

    React.useEffect(() => {
        
document.title="😕 My Portfolio";
})
  
    return(
        <>
      <img className="d-block w-100" src={smallPic} alt="First slide" fluid />
      <div id="error-page">
    <h1>404: Page Not Found 😕</h1>
    <h5>Go hard, or</h5>
    <Link to="/">
        <Button variant="primary" style={{backgroundColor:"rgb(70, 130, 180)"}}>Go Home</Button>
    </Link>
    </div>
    </>
    )};

export default NotFoundPage;