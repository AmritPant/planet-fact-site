import React from "react";
import "./ImageBox.css";
import "./ImageBox.media.css";

const Image = function (props) {
  // Passed curImg property same as the source Attribute
  // Concating Src to the curImg to make it work.

  const srcName = props.curImg.concat("Src");
  return (
    <div className="section-home__img-box">
      <img
        // Selecting Images Dynamically
        src={props[srcName]}
        alt={`Planet ${props.curName}`}
        className={`section-home__img section-home__img--${props.curPlanet} `}
      />
      {/* For ExtraImge when Surface button is clicked */}
      {props.curImg === "surface" && (
        <img
          src={props.srcSurfaceImgExtra}
          alt="Mercury Surface"
          className={`section-home__img-extra section-home__img-extra--${props.curPlanet}`}
        />
      )}
    </div>
  );
};

export default Image;
