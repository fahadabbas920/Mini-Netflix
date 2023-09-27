import React from "react";
import { useNavigate } from "react-router-dom";

function MainMoviePoster({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-movie">
        <h1 className="main-movie-title">{data.Title}</h1>
        <p className="main-movie-description">{data.Plot}</p>
      </div>
      <div className="main-button-links">
        <button
          onClick={() => {
            navigate(`/movie/${data.imdbID}`);
          }}
        >
          <i className="fa-solid fa-play"></i>Play
        </button>
        <button
          onClick={() => {
            navigate(`/movie/${data.imdbID}`);
          }}
        >
          <i className="fa-solid fa-circle-info"></i>More Info
        </button>
      </div>
    </>
  );
}

export default MainMoviePoster;
