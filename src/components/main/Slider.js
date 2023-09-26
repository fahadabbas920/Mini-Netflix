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
    if (e.target.scrollWidth === e.target.scrollLeft + e.target.clientWidth) {
      rightBtn.current.style.display = "none";
    } else {
      rightBtn.current.style.display = "flex";
    }
  }
  return (
    <section className="slider">
      <h1>New Movies</h1>
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
