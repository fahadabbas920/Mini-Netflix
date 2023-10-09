import React from "react";
import NotificationMovie from "./NotificationMovie";
import { useEffect } from "react";

function NotifficationMovieCont({
  containerRef,
  setNotificationCont,
  SetFocus,
  notificationCont,
  movies,
  setInputHide,
}) {
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [containerRef]);

  return (
    <div
      tabIndex={0}
      ref={containerRef}
      className={`navbar-notification-container navbar-notification-position ${
        notificationCont ? "hide" : ""
      }`}
      onBlur={() => {
        SetFocus(false);
        setNotificationCont(true);
      }}
      onFocus={() => {
        console.log("Focused");
        SetFocus(true);
      }}
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
  );
}

export default NotifficationMovieCont;
