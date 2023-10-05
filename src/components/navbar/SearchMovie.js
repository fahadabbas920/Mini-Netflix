import React from "react";

function SearchMovie({ searchedMovies }) {
  return (
    <div className="navbar-notification">
      <div className="navbar-notification-container search-movie-container">
        {searchedMovies?.length ? (
          searchedMovies?.map((movie) => {
            return (
              <div onClick={() => {}} key={movie.id}>
                <div>
                  <img src={movie.img} alt="" />
                </div>
                <div>
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div>Not Found</div>
        )}
      </div>
    </div>
  );
}

export default SearchMovie;
