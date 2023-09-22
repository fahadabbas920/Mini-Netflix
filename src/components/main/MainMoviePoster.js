import React from "react";

function MainMoviePoster() {
  return (
    <>
      <div className="main-movie">
        <h1 className="main-movie-title">Angry Birds 2</h1>
        {/* <div className="main-movie-line"></div> */}
        <p className="main-movie-description">
          Bird and Piggy Islands are under threat when Zeta, the leader of Eagle
          Island, wants to occupy them. Red must join forces with Leonard's team
          to thwart her bold schemes and save their homes.
        </p>
      </div>
      <div className="main-button-links">
        <button>
          <i className="fa-solid fa-play"></i>Play
        </button>
        <button>
          <i className="fa-solid fa-circle-info"></i>More Info
        </button>
      </div>
    </>
  );
}

export default MainMoviePoster;
