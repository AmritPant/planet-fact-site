import React from "react";
import "./Details.css";
import "./Details.media.css";
const Detail = function (props) {
  // Creating the Class so we can create the seprate object object for the different boxses
  class boxCl {
    classNameBox = "section-details__box";
    classNameDetail = "section-details__detail";
    classNameHeading = "heading-tertiary";

    constructor(boxName, boxData) {
      this.boxName = boxName;
      this.boxData = boxData;
    }
  }
  // Creating different objects for different boxses
  const rotation = new boxCl("Rotation Time", props.rotationTime);
  const revolution = new boxCl("Revolution time", props.revolutionTime);
  const radius = new boxCl("Radius", props.radius);
  const avgTemp = new boxCl("Average Temp", props.averageTemp);

  // Putting all object into an array so we can loop over them and render dynamically
  const boxArr = [rotation, revolution, radius, avgTemp];

  // Return Part
  return (
    <div className="section-details">
      <div className="section-details__details-box">
        {/* Using the map method over the boxArr [line:22] */}
        {boxArr.map((box) => {
          return (
            <div key={Math.random().toString()} className={box.classNameBox}>
              <h3 className={box.classNameHeading}>{box.boxName}</h3>
              <p className={box.classNameDetail}>{box.boxData}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Detail;
