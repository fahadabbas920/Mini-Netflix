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
            No Results
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchMovie;
