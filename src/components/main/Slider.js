import React from "react";
import { useRef } from "react";
import SliderMovieThumb from "./SliderMovieThumb";

function Slider() {
  const leftBtn = useRef();
  const rightBtn = useRef();
  const sliderContainer = useRef();

  function handleScroll(e) {
    console.log(sliderContainer.scrollLeft);
    if (e.target.scrollLeft === 0) {
      leftBtn.current.style.display = "none";
    } else {
      leftBtn.current.style.display = "flex";
    }
    if (e.target.scrollWidth === e.target.scrollLeft + e.target.clientWidth) {
      rightBtn.current.style.display = "none";
    } else {
      rightBtn.current.style.display = "flex";
    }
    // if (e.target.scrollLeft === 0) {
    //   e.target.parentNode.querySelector("#left-btn").style.display = "none";
    // } else {
    //   e.target.parentNode.querySelector("#left-btn").style.display = "flex";
    // }
    // if (e.target.scrollWidth === e.target.scrollLeft + e.target.clientWidth) {
    //   e.target.parentNode.querySelector("#right-btn").style.display = "none";
    // } else {
    //   e.target.parentNode.querySelector("#right-btn").style.display = "flex";
    // }
  }

  return (
    <section className="slider">
      <h1>New Movies</h1>
      <section className="slider-btns">
        <i
          // id="left-btn"
          ref={leftBtn}
          className="fa-solid fa-chevron-left"
          onClick={() => {
            sliderContainer.current.scrollLeft -= 510;
            // e.target.parentNode.querySelector(
            //   ".slider-container"
            // ).scrollLeft -= 510;
          }}
        ></i>
        <section
          ref={sliderContainer}
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
          // id="right-btn"
          ref={rightBtn}
          className="fa-solid fa-chevron-right"
          onClick={() => {
            sliderContainer.current.scrollLeft += 510;
            // console.log(sliderContainer)
            // console.log(leftBtn)
            // console.log(rightBtn)
            // e.target.parentNode.querySelector(
            //   ".slider-container"
            // ).scrollLeft += 510;
          }}
        ></i>
      </section>
    </section>
  );
}

export default Slider;
