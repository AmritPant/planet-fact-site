import React, { useState } from "react";
import "./Main.css";
import "./Main.media.css";
import PlanetData from "../PlanetData";
import Image from "./ImageBox/ImageBox";
import Textbox from "./TextBox/Textbox";
import Detail from "./Details/Details";

const Main = function (props) {
  const [curImg, setCurImg] = useState("overview");
  // Importing all the data from planetData and passing it to child  according to planet id which is set whel navigation is clicked [For more info: Please check Architecture]
  return (
    <main className="main">
      <section className="section-home">
        {/* Image Box  [Which contain all the images]*/}
        <Image
          overviewSrc={PlanetData[props.planetId].overviewImg}
          internalSrc={PlanetData[props.planetId].internalImg}
          surfaceSrc={PlanetData[props.planetId].surfaceImg}
          srcSurfaceImgExtra={PlanetData[props.planetId].surfaceImgExtra}
          curImg={curImg}
          curPlanet={props.curPlanetName}
        />
        {/* Text Box [Which containt Planet name, paragraph  , buttons] */}
        <Textbox
          planetName={PlanetData[props.planetId].planetName}
          overviewTxt={PlanetData[props.planetId].overviewTxt}
          overviewHref={PlanetData[props.planetId].overViewHref}
          internalImg={PlanetData[props.planetId].internalImg}
          internalTxt={PlanetData[props.planetId].internalTxt}
          internalHref={PlanetData[props.planetId].internalHref}
          surfaceImg={PlanetData[props.planetId].surfaceImg}
          surfaceImgExtra={PlanetData[props.planetId].surfaceImgExtra}
          surfaceTxt={PlanetData[props.planetId].surfaceTxt}
          surfaceHref={PlanetData[props.planetId].surfaceHref}
          setCurImg={setCurImg}
          curPlanetName={props.curPlanetName}
          setBtnArr={props.setBtnArr}
        />
      </section>
      {/* Details Box [Which containt radius , revolution, roation , averageTemp] */}
      <Detail
        rotationTime={PlanetData[props.planetId].rotationTime}
        revolutionTime={PlanetData[props.planetId].revolutionTime}
        radius={PlanetData[props.planetId].radius}
        averageTemp={PlanetData[props.planetId].averageTemp}
      />
    </main>
  );
};
export default Main;
