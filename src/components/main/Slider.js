import React from "react";
import { useRef } from "react";
import SliderMovieThumb from "./SliderMovieThumb";

function Slider({ movies}) {
  const leftBtn = useRef();
  const rightBtn = useRef();
  const sliderContainer = useRef();
  // console.log)

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
    <section className="slider">
      <h1>Latest</h1>
      <section className="slider-btns">
        <i
          ref={leftBtn}
          className="fa-solid fa-chevron-left"
          onClick={() => {
            sliderContainer.current.scrollLeft -= 510;
          }}
        ></i>
        <section
          ref={sliderContainer}
          className="slider-container"
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
                  key={movie.imdbID}
                  poster={movie.Poster}
                  ID={movie.imdbID}
                />
              );
            })}
        </section>
        <i
          ref={rightBtn}
          className="fa-solid fa-chevron-right"
          onClick={() => {
            sliderContainer.current.scrollLeft += 510;
          }}
        ></i>
      </section>
    </section>
  );
}

export default Slider;
