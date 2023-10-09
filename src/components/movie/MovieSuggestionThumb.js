import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { saveMovies } from "../../actions/movieActions";
import { useNavigate } from "react-router-dom";

function MovieSuggestionThumb({ poster, id, movie }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movieArray);

  const handleBtn = () => {
    const newList = movies.filter((moviee) => {
      return moviee.id !== movie.id;
    });
    dispatch(saveMovies([movie, ...newList.slice(0, newList.length - 1)]));
    navigate(`/movie/${movie.id}`);
  };

  return (
    <li
      onClick={() => {
        handleBtn();
      }}
    >
      <img src={poster} alt="" />
    </li>
  );
}

export default MovieSuggestionThumb;
