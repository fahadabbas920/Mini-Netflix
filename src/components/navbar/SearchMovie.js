import React from "react";
import NotificationMovie from "./NotificationMovie";

function SearchMovie({ searchedMovies }) {
  // console.log(searchedMovies);
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
                // uniq={movie.id}
              />
              // <div onClick={() => {}} key={i}>
              //   <div>
              //     <img src={movie.img} alt="" />
              //   </div>
              //   <div>
              //     <h3>{movie.title}</h3>
              //     <p>{movie.year}</p>
              //   </div>
              // </div>
            );
          })
        ) : (
          <div>No Results</div>
        )}
      </div>
    </div>
  );
}

export default SearchMovie;
