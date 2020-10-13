import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

function ToHeadingButton (props) {
    const [isHide, setHide] = useState(false);

    return(
      <a href={`#${props.headingHash}`} className={isHide ? "invisible" : ""} onClick={() => setHide(true)}><FaArrowCircleDown class="mx-auto text-white text-center desktop-only-button" size="50" style={{position: "relative", top: `${props.topOffset}`, zIndex: "999"}} /></a>
    )
}

export default ToHeadingButton;