import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import pic from "../img/pedro-NY_CITY_unsplash-3x1-2160x720-bb-time-square-night-view_new.jpg";
import picSmall from "../img/pedro-NY_CITY_unsplash-16x9-2160x1215-bb-time-square-night-view.jpg";
import baloons from "../img/pedro-baloons-3x1-2160x720-bb.jpg";
import baloonsSmall from "../img/pedro-baloons-16x9-2160x1215-bb.jpg";
import lake from "../img/pedro-man_at_lake-3x1-2160x720-bb.jpg";
import lakeSmall from "../img/pedro-man_at_lake-16x9-2160x1215-bb.jpg";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

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

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  var slide1;
  var slide2;
  var slide3;
  if (width > 800) {
    slide1 = lake;
    slide2 = pic;
    slide3 = baloons;
  } else {
    slide1 = lakeSmall;
    slide2 = picSmall;
    slide3 = baloonsSmall;
  }
  var unsplashed = "Image credit: Unsplashed.com";

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade="true"
        interval="1800"
      >
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h1>{props.heading1}</h1>
            <div>{unsplashed}</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <Carousel.Caption>
            <h1>{props.heading2}</h1>
          <div>{unsplashed}</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
          <Carousel.Caption>
            <h1>{props.heading3}</h1>
          <div>{unsplashed}</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ControlledCarousel;
