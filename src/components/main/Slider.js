import React from "react";

import SliderMovieThumb from "./SliderMovieThumb";

function Slider() {
  function handleScroll(e) {
    if (e.target.scrollLeft === 0) {
      e.target.parentNode.querySelector("#left-btn").style.display = "none";
    } else {
      e.target.parentNode.querySelector("#left-btn").style.display = "flex";
    }
    if (e.target.scrollWidth === e.target.scrollLeft + e.target.clientWidth) {
      e.target.parentNode.querySelector("#right-btn").style.display = "none";
    } else {
      e.target.parentNode.querySelector("#right-btn").style.display = "flex";
    }
  }

  return (
    <section className="slider">
      <h1>New Movies</h1>
      <section className="slider-btns">
        <i
          id="left-btn"
          className="fa-solid fa-chevron-left"
          onClick={(e) => {
            e.target.parentNode.querySelector(
              ".slider-container"
            ).scrollLeft -= 510;
          }}
        ></i>
        <section
          className="slider-container"
          onScroll={(e) => {
            handleScroll(e);
          }}
        >
          <SliderMovieThumb />
          <SliderMovieThumb />
          <SliderMovieThumb />
          <SliderMovieThumb />
          <SliderMovieThumb />
          <SliderMovieThumb />
          <SliderMovieThumb />
          <SliderMovieThumb />
          <SliderMovieThumb />
        </section>
        <i
          id="right-btn"
          className="fa-solid fa-chevron-right"
          onClick={(e) => {
            e.target.parentNode.querySelector(
              ".slider-container"
            ).scrollLeft += 510;
          }}
        ></i>
      </section>
    </section>
  );
}

export default Slider;
