import React from "react";
import NotificationMovie from "./NotificationMovie";

function SearchMovie({ searchedMovies }) {
  console.log(searchedMovies);

  return (
    <div className="navbar-notification">
      <div className="navbar-notification-container search-movie-container">
        {searchedMovies?.length ? (
          searchedMovies?.map((movie, i) => {
            return (
              <NotificationMovie
                title={movie.title}
                plot={movie.year}
                poster={movie.img}
                key={i}
                url={movie.url}
                // uniq={movie.id}
              />
            );
          })
        ) : (
          <div>
            <div>{/* <img src={poster} alt="" /> */}</div>
            <div>
              <h3>Not Found</h3>
              <p>
                Please check your spellings or The movie is not present in the
                database
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchMovie;
