import React from "react";
import Slider from "./Slider";
import MainMoviePoster from "./MainMoviePoster";
// import Home from "../assets/Home.PNG";
// import movie from "../../assets/Home.PNG";

function Main() {
  return (
    <>
      <div className="main-bg"></div>
      <div className="main-container">
        <MainMoviePoster />
        <Slider />
        <Slider />
      </div>
    </>
  );
}

export default Main;
