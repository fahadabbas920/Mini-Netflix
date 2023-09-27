import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";
// import { getMovie } from "../../actions/movieActions";
import { useSelector } from "react-redux";

function Movie() {
  const movieID = useParams();
  const MOV = useSelector((state) => state.movieArray);
  const movie = MOV.filter((movie) => {
    return movie.imdbID === movieID.ID;
  });
  console.log(movie);
  return (
    <div className="movie-container">
      <div className="movie-details">
        <div className="movie-header">
          <div className="movie-poster">
            <img
              src={`${movie[0].Poster}`}
              alt={`movie-poster : ${movie[0].imbdID}`}
            />
          </div>
          <div className="movie-heading">
            <h1>{movie[0].Title}</h1>
            <p>{movie[0].Plot}</p>
          </div>
        </div>
        <div className="movie-info">
          <div>
            <div>Actors:</div>
            <div>{movie[0].Actors}</div>
          </div>
          <div>
            <div>Awards:</div>
            <div>{movie[0].Awards}</div>
          </div>
          <div>
            <div>BoxOffice:</div>
            <div>{movie[0].BoxOffice}</div>
          </div>
          <div>
            <div>Country:</div>
            <div>{movie[0].Country}</div>
          </div>
          <div>
            <div>Director:</div>
            <div>{movie[0].Director}</div>
          </div>
          <div>
            <div>Genre:</div>
            <div>{movie[0].Genre}</div>
          </div>
          <div>
            <div>Language:</div>
            <div>{movie[0].Language}</div>
          </div>
          <div>
            <div>Metascore:</div>
            <div>{movie[0].Metascore}</div>
          </div>
          <div>
            <div>Rated:</div>
            <div>{movie[0].Rated}</div>
          </div>
          <div>
            <div>Released:</div>
            <div>{movie[0].Released}</div>
          </div>
          <div>
            <div>Time:</div>
            <div>{movie[0].Runtime} min</div>
          </div>
          <div>
            <div>Writer:</div>
            <div>{movie[0].Writer}</div>
          </div>
          <div>
            <div>Year:</div>
            <div>{movie[0].Year}</div>
          </div>
          <div>
            <div>imdb Rating:</div>
            <div>{movie[0].imdbRating}</div>
          </div>
          <div>
            <div>imdb Votes:</div>
            <div>{movie[0].imdbVotes}</div>
          </div>
          <ul></ul>
        </div>
      </div>
      <div className="movie-trailer">
        <iframe
          src="https://www.youtube.com/embed/_RG8hoGMxKw?si=Ob1Efw0nSdhUbLKt"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Movie;
