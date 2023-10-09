import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { saveMovies } from "../../actions/movieActions";
import { useNavigate } from "react-router-dom";
import { saveNotify } from "../../actions/movieActions";

function MovieSuggestionThumb({ poster, id, movie }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movieArray);
  const notify = useSelector((state) => state.notify);

  const handleBtn = () => {
    let isSave;
    isSave =
      movies.filter((moviee) => {
        return moviee.id === movie.id;
      }).length > 0;

    if (isSave) {
      navigate(`/movie/${movie.id}`);
    } else {
      dispatch(saveMovies([movie, ...movies.slice(0, movies.length - 1)]));
      dispatch(saveNotify(notify + 1));
      navigate(`/movie/${movie.id}`);
    }

    // if (movies.length === 10) {
    //   dispatch(saveMovies([movie, ...movies.slice(0, movies.length - 1)]));
    // } else {
    //   dispatch(saveMovies([movie, ...movies]));
    // }
    // const newList = movies.filter((moviee) => {
    //   return moviee.id !== movie.id;
    // });
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
