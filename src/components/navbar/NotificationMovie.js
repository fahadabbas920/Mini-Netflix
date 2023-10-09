import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { saveMovies } from "../../actions/movieActions";

function NotificationMovie({ title, plot, poster, uniq, url }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieArray);
  // const [data, setData] = useState([]);
  // if (url) {
  //   console.log(url);
  // }
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
        console.log(data.data.data.movie);
        const newList = movies.filter((movie) => {
          return movie.id !== data.data.data.movie.id;
        });
        dispatch(
          saveMovies([
            data.data.data.movie,
            ...newList.slice(0, newList.length - 1),
          ])
        );
        navigate(`/movie/${data.data.data.movie.id}`);
        console.log(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
