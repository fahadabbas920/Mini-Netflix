import React from "react";
import NotificationMovie from "./NotificationMovie";
import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Notification({ input, setInputHide }) {
  const movies = useSelector((state) => state.movieArray);
  const [notificationCont, setNotificationCont] = useState(true);
  const width = useMediaPredicate("(max-width: 600px)");
  return (
    <div className={`navbar-notification ${width && !input ? "hide" : ""}`}>
      <div
        className={`navbar-notification-container navbar-notification-position ${
          notificationCont ? "hide" : ""
        }`}
      >
        {movies?.map((movie) => {
          return (
            <NotificationMovie
              setInputHide={setInputHide}
              title={movie.title}
              plot={movie.year}
              poster={movie.medium_cover_image}
              key={movie.id}
              uniq={movie.id}
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
