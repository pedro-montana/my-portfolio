import React, { useState, useEffect } from "react";

import ModalVideo from "react-modal-video";
import ToHeadingButton from "../components/ToHeadingButton";
import { FaPlay } from "react-icons/fa";

import Container from "react-bootstrap/Container";

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const VideoOverlay = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);

useEffect(() => {
    if (isOpen)
    {document.body.style.overflow = "hidden";}
    else {document.body.style.overflow = "visible";}
});

  return (
    <React.Fragment>
      <ModalVideo
        channel="custom"
        isOpen={isOpen}
        url={props.currentUrl}
        onClose={() => (setOpen(false))}
      />
      <img
        className="video-thumb-element"
        style={isVisible ? { backgroundColor: "white", opacity: 0.8 } : null}
        alt={props.currentAlt}
        src={props.currentThumbnail}
        onClick={() => (setOpen(true), setVisible(false))}
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
      />
      <FaPlay
        className={isVisible ? "play-button" : "d-none"}
        size="120"
        onClick={() => (setOpen(true), setVisible(false))}
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
      />
      <h2
        className={isVisible ? "play-button-duration text-h1" : "d-none"}
        onClick={() => (setOpen(true), setVisible(false))}
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
      >
        {props.duration}
      </h2>
    </React.Fragment>
  );
};

function VideosPage() {
  const [value, setValue] = useStateWithLocalStorage("myLanguage");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "http://orangevalleycaa.org/api/videos"
      ).then((response) => response.json());
      setData(result);
    };
    fetchData();
  }, []);
  React.useEffect(() => {
    if (value === "gb") {
      document.title = "Videos | My Portfolio";
    } else document.title = "Videa | My Portfolio";
  });
  return (
    <>
      <div style={{ maxHeight: "600px", overflow: "hidden" }}>
        <video
          className="d-block w-100"
          src={
            "http://orangevalleycaa.org/api/media/videos/UnderwaterPhotoMusic_062314189.mp4"
          }
          autoPlay
          loop
          muted
          alt="Sea World"
        />
      </div>
      <Container id="all-video-box">
        <ToHeadingButton headingHash="vp-heading" topOffset="-75px" />
        <h1 id="vp-heading" className="font-weight-light ml-5 mb-5 mr-5 mt-1">
          Videos
        </h1>

        {data.map((video) => (
          <div className="video-element my-5 mx-auto mb-5" key={video.id}>
            <h2 className="font-weight-light">{video.name}</h2>
            {/* <video className="video-element" controls src={video.video_url} /> */}
            <div className="video-with-button mt-3">
              <h5 className="text-left ml-3 mobile-only-video">Video:</h5>
              <h6 className="text-left font-weight-light ml-3 mobile-only-video">Duration: {video.duration}</h6>
              <VideoOverlay
                currentUrl={video.video_url}
                currentThumbnail={video.image}
                currentHeading={video.name}
                duration={video.duration}
                currentAlt="Play"
              />
            </div>
            <p className="my-2">{video.description}</p>
          </div>
        ))}
      </Container>
    </>
  );
}

export default VideosPage;
