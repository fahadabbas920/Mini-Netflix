import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { saveMovies } from "../../actions/movieActions";
import { saveNotify } from "../../actions/movieActions";

function NotificationMovie({
  title,
  plot,
  poster,
  uniq,
  url,
  // handleNoti,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieArray);
  const notify = useSelector((state) => state.notify);
  let id;
  function FetchMovie() {
    axios
      .get(`http://www.omdbapi.com/?apikey=7d9f393&t=${title}`)
      .then((data) => {
        id = data.data.imdbID;
        FetchMovieYTS(id);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function FetchMovieYTS(id) {
    axios
      .get(`https://yts.mx/api/v2/movie_details.json?imdb_id=${id}`)
      .then((data) => {
        let isSave;
        isSave =
          movies.filter((moviee) => {
            return moviee.id === data.data.data.movie.id;
          }).length > 0;

        if (isSave) {
          navigate(`/movie/${data.data.data.movie.id}`);
          console.log("Movie Already present navigationg to Movie component");
        } else {
          dispatch(
            saveMovies([
              data.data.data.movie,
              ...movies.slice(0, movies.length - 1),
            ])
          );
          dispatch(saveNotify(notify + 1));
          navigate(`/movie/${data.data.data.movie.id}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // const ref = useRef()

  return (
    <div
      onClick={() => {
        if (url) {
          FetchMovie();
        } else {
          navigate(`/movie/${uniq}`);
        }
      }}
    >
      <div>
        <img src={poster} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{plot}</p>
      </div>
    </div>
  );
}

export default NotificationMovie;
