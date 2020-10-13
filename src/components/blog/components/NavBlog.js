import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ReactTooltip from "react-tooltip";

import smallPic from "../../../img/pedro-lights_in_library-3x1-2160x720-bb.jpg";

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};


const buttonVariant = "secondary";

function NavBlog () {
  React.useEffect(() => {
    if (window.location.href.includes("/blog")) {
      document.title="Blog | My Portfolio";
    }
  }, [])
const [value, setValue] = useStateWithLocalStorage("myLanguage");
if (value === "gb")
{
  var homeBtn = "Home";
  var aboutBtn = "About";
  var articlesBtn = "Articles";
  var exitBtn = "Exit";
} else {
  var homeBtn = "Domů";
  var aboutBtn = "O\u00a0mně";
  var articlesBtn = "Články";
  var exitBtn = "Odejít";
}
return(
  <>
      <img className="mb-1 d-block" style={{position: "relative",top:"-16px", left:"-16px", right: "-16px", width: "110%"}} src={smallPic} alt="Library" fluid />

    <div id="nav-blog" className="d-flex mb-1">
      <Link to="/my-portfolio/blog" className="mx-2">
        <Button variant={buttonVariant}>{homeBtn}</Button>
      </Link>
      <Link to="/my-portfolio/blog/blog-about" className="mx-2">
        <Button variant={buttonVariant}>{aboutBtn}</Button>
      </Link>
      <Link to="/my-portfolio/blog/articles-list" className="mx-2">
        <Button variant={buttonVariant}>{articlesBtn}</Button>
      </Link>
      <Link to="/my-portfolio/showroom" className="mx-2">
        <Button variant="outline-dark" data-tip={value === "gb" ? "Showroom" : "Mé ukázky"} data-place="bottom">{exitBtn}</Button>
        <ReactTooltip effect="solid" arrowColor="transparent" />
      </Link>
    </div>
    <hr/>
    </>
)}

export default NavBlog;