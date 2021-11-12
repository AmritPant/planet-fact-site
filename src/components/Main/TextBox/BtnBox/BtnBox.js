import React from "react";
import "./BtnBox.css";
import "./BtnBox.media.css";
const BtnBox = function (props) {
  const onBtnClickHandler = function (event) {
    // Making the background Color of the btn Change when Clicked
    // Using an active class which holds the value of background color

    const arrayOfBtn = Array.from(
      event.target.closest(".section-home__btn-box").children
    );

    props.setBtnArr(arrayOfBtn);

    // every planet has the unique color so setting the active class dynaimcally with curPlanetName, [For more details: check index.css and BtnBox.css]
    arrayOfBtn.map((btn) =>
      btn.classList.remove(`btn-active-${props.curPlanetName}`)
    );
    event.target
      .closest(".btn")
      .classList.add(`btn-active-${props.curPlanetName}`);

    // Getting the Btn name which is passed in attribute
    const btnName = event.target.closest(".btn").getAttribute("btn-name");

    // Matching the btnName with the props attribute where href is passed
    const btnHref = btnName.concat("Href");

    // Main Work when button is clicked
    props.setTxt(btnName);
    props.setCurImg(btnName);
    props.setCurHref(props[btnHref]);
  };

  // Using Class to create the different
  class BtnCl {
    onClick = onBtnClickHandler;
    constructor(btnName, btnFullName, className, index, nameMobile) {
      this.className = className;
      this.btnName = btnName;
      this.btnFullName = btnFullName;
      this.index = index;
      this.nameMobile = nameMobile;
    }
  }

  // Creating object for every button (dynamically because of class)
  const overviewBtn = new BtnCl(
    "overview",
    "overview",
    `btn btn-active-${props.curPlanetName}`,
    "01",
    "overview"
  );
  const surfaceBtn = new BtnCl(
    "surface",
    "surface geology",
    `btn ${"btn"}`,
    "02",
    "surface"
  );
  const internalBtn = new BtnCl(
    "internal",
    "internal Structure",
    "btn ",
    "03",
    "structure"
  );

  // Putting all the button inside one array ,
  // so we can use map method to map over them
  const btnArr = [overviewBtn, internalBtn, surfaceBtn];

  // return Part
  return (
    <div className="section-home__btn-box">
      {/* Using the Map method and loop over the btn Array in line:62 */}
      {btnArr.map((btn) => {
        return (
          <button
            key={btn.btnName}
            className={btn.className}
            onClick={btn.onClick}
            btn-name={btn.btnName}
          >
            <span className="section-home__span-button">{btn.index}</span>
            <span className="section-home__span-normal">{btn.btnFullName}</span>
            {/* Below Span is only for the Mobile */}
            <span className="section-home__span-normal section-home__span-mobile">
              {btn.nameMobile}
            </span>
          </button>
        );
      })}
    </div>
  );
};
export default BtnBox;
