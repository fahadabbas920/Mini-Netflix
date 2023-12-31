import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveList } from "../../actions/movieActions";
import axios from "axios";
import MovieSuggestionThumb from "./MovieSuggestionThumb";

function Movie() {
  const movieID = useParams();
  const movies = useSelector((state) => state.movieArray);
  const myList = useSelector((state) => state.myList);
  // console.log(myList);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);
  // const [movie, setMovie] = useState([]);

  const movie = movies?.filter((movie) => {
    return movie.id === Number(movieID.ID);
  });
  useEffect(() => {
    console.log(movieID.ID);
    const isSave =
      myList.filter((movie) => {
        return movie.id === Number(movieID.ID);
      }).length > 0;
    console.log(isSave);
    if (isSave) {
      setSaved(true);
    } else {
      setSaved(false);
    }

    axios
      .get(
        `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieID.ID}`
      )
      .then((data) => setSuggestions(data.data.data.movies))
      .catch((error) => console.log(error));
  }, [movieID.ID, myList]);
  function handleSave() {
    if (saved) {
      const newList = myList.filter((movie) => {
        return movie.id !== Number(movieID.ID);
      });
      dispatch(saveList(newList));
    } else {
      // console.log(movie)
      dispatch(saveList([...movie, ...myList]));
    }
  }
  console.log(movie[0]);

  return (
    <div className="movie-container">
      <div className="movie-details">
        <div className="movie-poster">
          <img
            src={`${movie[0]?.medium_cover_image}`}
            alt={`movie-poster : ${movie[0]?.id}`}
          />
        </div>
        <div className="movie-heading">
          <h1>{movie[0]?.title}</h1>
          <p>
            {/* {movie[0]?.summary.slice(0, 120)} */}
            {movie[0]?.description_full.slice(0, 150)}
          </p>
          <div className="movie-info">
            <div>
              <h4>Genre:</h4>
              <p>{movie[0]?.genres.join(", ")}</p>
            </div>
            <div>
              <h4>Year Release:</h4>
              <p>{movie[0]?.year}</p>
            </div>
            <div>
              <h4>Runtime:</h4>
              <p>{movie[0]?.runtime} min</p>
            </div>
            <div>
              <h4>imdb:</h4>
              <p>{movie[0]?.rating}</p>
            </div>
            <div />
          </div>
        </div>
      </div>
      <div className="movie-trailer">
        <iframe
          src={`https://www.youtube.com/embed/${movie[0]?.yt_trailer_code}?si=Ob1Efw0nSdhUbLKt`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="movie-trailer-options">
          <button
            onClick={() => {
              handleSave();
            }}
          >
            {saved ? (
              <>
                Remove from List <i className="fa-solid fa-multiply"></i>
              </>
            ) : (
              <>
                Add to List <i className="fa-solid fa-plus"></i>
              </>
            )}
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Browse Movies
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              navigate("/mylist");
            }}
          >
            View My List
          </button>
        </div>
        <h3>Similar Movies</h3>
        <div className="movie-trailer-suggestions">
          <ul>
            {suggestions?.map((movie) => {
              return (
                <MovieSuggestionThumb
                  poster={movie.medium_cover_image}
                  id={movie.id}
                  key={movie.id}
                  movie={movie}
                />
              );
            })}
          </ul>
          {/* <div className="movie-trailer-suggestions-List"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Movie;
