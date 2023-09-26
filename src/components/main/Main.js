import React from "react";
import Slider from "./Slider";
import MainMoviePoster from "./MainMoviePoster";
// import Home from "../assets/Home.PNG";
// import movie from "../../assets/Home.PNG";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Main() {
  const movies = useSelector((state) => state.movieArray);
  // console.log(movies);
  return (
    <>
      <div className="main-bg"></div>
      <div className="main-container">
        <MainMoviePoster />
        <Slider movies={movies}/>
        {/* <Slider /> */}
      </div>
    </>
  );
}

export default Main;
