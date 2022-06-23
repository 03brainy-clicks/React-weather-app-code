import React from "react";
import lightcloud from "../assets/LightCloud.png";

function Daycard({ date, temperature }) {
  return (
    <div className="col-lg-2 col-md-5 p-3 my-3 my-lg-0 day-card text-center">
      <p>{date}</p>
      <img src={lightcloud} width="75px" alt="" />
      <br />
      <br />
      <p>{temperature} °C</p>
    </div>
  );
}

export default Daycard;
