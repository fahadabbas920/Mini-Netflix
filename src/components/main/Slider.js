import React from "react";
import { useRef } from "react";
import SliderMovieThumb from "./SliderMovieThumb";

function Slider({ movies }) {
  const leftBtn = useRef();
  const rightBtn = useRef();
  const sliderContainer = useRef();

  function handleScroll(e) {
    if (e.target.scrollLeft === 0) {
      leftBtn.current.style.display = "none";
    } else {
      leftBtn.current.style.display = "flex";
    }
    if (e.target.scrollWidth === e.target.clientWidth + e.target.scrollLeft) {
      rightBtn.current.style.display = "none";
    } else {
      rightBtn.current.style.display = "flex";
    }
  }
  return (
    // <section className="slider-container">
    <>
      <h1 className="slider-heading">Latest</h1>
      <div className="slider-container">
        <i
          ref={leftBtn}
          className="fa-solid fa-chevron-left"
          onClick={() => {
            sliderContainer.current.scrollLeft -= 510;
          }}
        ></i>
        <ul
          ref={sliderContainer}
          className="slider-ul"
          onScroll={(e) => {
            // console.log(e.target.scrollLeft);
            // console.log(e.target.clientWidth);
            // console.log(e.target.scrollWidth);
            handleScroll(e);
          }}
        >
          {movies &&
            movies.map((movie) => {
              return (
                <SliderMovieThumb
                  key={movie.id}
                  poster={movie.large_cover_image}
                  ID={movie.id}
                />
              );
            })}
        </ul>
        <i
          ref={rightBtn}
          className="fa-solid fa-chevron-right"
          onClick={() => {
            sliderContainer.current.scrollLeft += 510;
          }}
        ></i>
      </div>
      {/* </section> */}
    </>
  );
}

export default Slider;
