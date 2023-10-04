import React from "react";
import { useNavigate } from "react-router-dom";

function SliderMovieThumb({ poster, ID }) {
  const navigate = useNavigate();
  return (
    <li
      className="item"
      onClick={() => {
        navigate(`/movie/${ID}`);
      }}
    >
      <img src={poster} alt={`movie-poster : ${ID}`} />
    </li>
  );
}

export default SliderMovieThumb;
