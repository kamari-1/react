import React from "react";
import { Link } from "react-router-dom";

function Device({ data, index }) {
  let device = data.devices[index],
    temp,
    temp_HB = data.limits[0].items[0].upper,
    temp_LB = data.limits[0].items[0].lower,
    oxygen,
    oxygen_HB = data.limits[0].items[1].upper,
    oxygen_LB = data.limits[0].items[1].lower,
    currentTime = new Date().getTime();

  const getTemp = () => {
    device.items[0].items.forEach((elem) => {
      if (currentTime >= elem.timestamp) {
        temp = elem.value;
      }
    });
  };

  const getOxygen = () => {
    device.items[1].items.forEach((elem) => {
      if (currentTime >= elem.timestamp) {
        oxygen = elem.value;
      }
    });
  };

  // setInterval(() => {
  getTemp();
  getOxygen();
  // }, 2000);

  return (
    <div className="device">
      <h2 className="device-title">{device.name}</h2>
      {/* ----- TEMPERATURE ----- */}
      <div className="container">
        <div className="quality">
          <h4 className="quality-name">Temperature</h4>
          <p>
            <span className="quality-value">{temp || "-"} </span> °C
          </p>
        </div>
        <div className="bounds">
          <p>L: {temp_LB || "null"}</p>
          <p>
            <span className="text-">H</span>: {temp_HB || "null"}
          </p>
        </div>
      </div>
      {/* ----- OXYGEN ----- */}
      <div className="container">
        <div className="quality">
          <h4 className="quality-name">Oxygen</h4>
          <p>
            <span className="quality-value">{oxygen || "-"} </span> (mg/l)
          </p>
        </div>
        <div className="bounds">
          <p>L: {oxygen_LB || "null"}</p>
          <p>H: {oxygen_HB || "null"}</p>
        </div>
      </div>

      {/* ----- BUTTON ----- */}
      <Link to={`/chart/${index}`}>
        <button className="btn">View chart</button>
      </Link>
    </div>
  );
}

export default Device;
