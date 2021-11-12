import React from "react";
import "./PlanetList.css";

const PlanetList = function (props) {
  return (
    <li key={props.planetName} className="navigation__item">
      {props.children}
    </li>
  );
};

export default PlanetList;
