import React from "react";
import { useNavigate } from "react-router-dom";

function SliderMovieThumb({ poster, ID }) {
  const navigate = useNavigate();
  return (
    <div className="slider-movie">
      <img
        src={poster}
        alt={`movie-poster : ${ID}`}
        onClick={() => {
          // console.log("Clicked");
          navigate(`/movie/${ID}`);
        }}
      />
    </div>
  );
}

export default SliderMovieThumb;
