import React from "react";
// import movie from "../../assets/movie.jpg";
import NotificationMovie from "./NotificationMovie";
import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Notification({ input }) {
  const movie = useSelector((state) => state.movieArray);
  const [notificationCont, setNotificationCont] = useState(true);
  const width = useMediaPredicate("(max-width: 600px)");

  return (
    <div className={`navbar-notification ${width && !input ? "hide" : ""}`}>
      <div
        className={`navbar-notification-container navbar-notification-position ${
          notificationCont ? "hide" : ""
        }`}
      >
        {movie &&
          movie.map((movie) => {
            return (
              <NotificationMovie
                title={movie.Title}
                plot={movie.Plot}
                poster={movie.Poster}
                key={movie.imdbID}
                uniq={movie.imdbID}
              />
            );
          })}
      </div>
      <i
        className="fa-solid fa-bell"
        onClick={() => {
          setNotificationCont((state) => !state);
        }}
      ></i>
    </div>
  );
}

export default Notification;
