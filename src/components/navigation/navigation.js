import React from "react";
import PlanetList from "./PlanetList";
import "./navigation.scss";
import "./navigation.media.css";

const Nav = function (props) {
  // When the button are cliked in navigation
  // on Click Handler
  const onClickHandler = function (event) {
    const planetId = event.target.getAttribute("planet-id");
    // setting planetNavName instead of planetName because it is already exist
    const curPlanetName = event.target.textContent;
    props.setPlanetId(planetId);
    props.setCurPlanetName(curPlanetName);

    // Getting the button data and removing the all classes when the different planet are clicked
    props.arrayOfBtn.map((btn) => {
      return planetNameArr.forEach((planet) => {
        btn.classList.remove(`btn-active-${planet}`);
      });
    });
  };

  // Planet name array
  const planetNameArr = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  return (
    <div>
      <nav className="navigation">
        <h2 className="heading-secondary">The Planets</h2>
        <div className="navigation__tittle-box"></div>
        <ul className="navigation__list">
          {/* Rendering the button dynamically */}
          {planetNameArr.map((list, index) => {
            return (
              <PlanetList key={Math.random()} planetName={list}>
                <button
                  type="button"
                  className="navigation__link"
                  planet-id={index}
                  onClick={onClickHandler}
                >
                  {list}
                </button>
              </PlanetList>
            );
          })}
        </ul>
        <img
          className="navigation__icon-hamburger"
          src="assets/icon-hamburger.svg"
        />
      </nav>
    </div>
  );
};

export default Nav;
