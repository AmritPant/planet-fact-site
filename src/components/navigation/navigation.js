import React, { useState } from "react";
import PlanetList from "./PlanetList";
import "./navigation.scss";
import "./navigation.media.css";

const Nav = function (props) {
  // Using the State to check whether NavBar is open or not
  const [mobileNavBarStatus, setMobileNavBarStatus] = useState(false);

  ////////////////////////////////////////////////////////////////////////////////
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
    // Removing the menu  [Only Applicable For Mobile]
    document
      .querySelector(".navigation__list")
      .classList.remove("navigation__list--active");
    // Changing the class
    setMobileNavBarStatus(false);
  };

  /////////////////////////////////////////////////////////////////////////////////
  // Setting the Dynamic Hover In Dekstop Only
  const onMouseEnterHandler = function (event) {
    // Gaurd Clause
    // Preventing Opening in Mobile
    if (document.getElementById("root").getBoundingClientRect().width < 768)
      return;
    event.target.style.borderTop = `4px solid var(--color-${event.target.textContent})`;
  };
  const onMouseOutHandler = function (event) {
    event.target.style.borderTop = "none";
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // Hamburger Menu Handler  [Only for Mobile]
  const onClickIconHandler = function (event) {
    //  Using the useState hook for setting the class name Dynamically
    if (
      document
        .querySelector(".navigation__list")
        .classList.contains("navigation__list--active")
    ) {
      setMobileNavBarStatus(false);
    } else {
      setMobileNavBarStatus(true);
    }
    event.target.setAttribute("src", "assets/cross.svg");
    document
      .querySelector(".navigation__list")
      .classList.toggle("navigation__list--active");
    console.log(document.querySelector(".navigation__list").classList);
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

  // Return Part
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
                  onMouseEnter={onMouseEnterHandler}
                  onMouseOut={onMouseOutHandler}
                >
                  {/* Span is Only for Mobile */}
                  <span
                    className="navigation__link-background"
                    style={{ backgroundColor: `var(--color-${list})` }}
                  />
                  {list}
                  {/*  Img is Only for mobile  */}
                  <img
                    src="assets/icon-chevron.svg"
                    className="navigation__icon-arrow"
                    alt="Icon arrow"
                  />
                </button>
              </PlanetList>
            );
          })}
        </ul>
        <img
          className="navigation__icon-hamburger"
          src={
            mobileNavBarStatus
              ? "assets/cross.svg"
              : "assets/icon-hamburger.svg"
          }
          onClick={onClickIconHandler}
          alt="Icon Hamburger"
        />
      </nav>
    </div>
  );
};

export default Nav;
