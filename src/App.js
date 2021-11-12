import React, { useState } from "react";
import Nav from "./components/navigation/navigation";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  // Creating the Planet Id , so we can pass planetId in main  ,andsetId when we click in navigation
  const [planetId, setPlanetId] = useState(0);
  const [curPlanetName, setCurPlanetName] = useState("mercury");
  // getting the btnArray from the btnBox and passing to Navigation
  const [btnArr, setBtnArr] = useState([]);

  return (
    <div>
      <img className="main-img" src="assets/background-stars.svg" alt="star" />
      <Nav
        setPlanetId={setPlanetId}
        setCurPlanetName={setCurPlanetName}
        arrayOfBtn={btnArr}
      ></Nav>
      <Main
        planetId={planetId}
        curPlanetName={curPlanetName}
        setBtnArr={setBtnArr}
      />
    </div>
  );
}

export default App;
