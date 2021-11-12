import React, { useState } from "react";
import "./Textbox.css";
import "./TextBox.media.css";
import BtnBox from "./BtnBox/BtnBox";

const Textbox = function (props) {
  const [curTxt, setTxt] = useState("overview");
  const [curHref, setCurHref] = useState(props.overviewHref);

  // Making the cutTxt and props passed from Main.js same to make dynamic
  // Making the curTxt and the props.overviewTxt same
  const textName = curTxt.concat("Txt");

  // Return Part
  return (
    <div className="section-home__text-box">
      {/* Dynamically Adding the Planet Name , Data coming from Main.js */}
      <div className="section-home__text">
        <h1 className="heading-primary">{props.planetName}</h1>
        {/* Dynamically adding the paragraph  */}
        <div className="section-home__para-box">
          <p className="section-home__para">{props[textName]}</p>
          <a href={curHref} className="section-home__link" target="blank">
            Source:
            <span className="section-home__span-link"> Wikipedia </span>
            <img
              src="assets/icon-source.svg"
              alt="icon"
              className="section-home__icon-source"
            />
          </a>
        </div>
      </div>
      {/* --------Seprator-------------------------- */}
      <BtnBox
        setTxt={setTxt}
        setCurImg={props.setCurImg}
        setCurHref={setCurHref}
        overviewHref={props.overViewHref}
        internalHref={props.internalHref}
        surfaceHref={props.surfaceHref}
        curPlanetName={props.curPlanetName}
        setBtnArr={props.setBtnArr}
      />
    </div>
  );
};

export default Textbox;
