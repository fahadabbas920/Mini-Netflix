import React from "react";
import { useState, useRef } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useSelector } from "react-redux/es/hooks/useSelector";
import NotifficationMovieCont from "./NotifficationMovieCont";
function Notification({ input, setInputHide }) {
  const movies = useSelector((state) => state.movieArray);
  const [notificationCont, setNotificationCont] = useState(true);
  const width = useMediaPredicate("(max-width: 600px)");
  const containerRef = useRef(null);
  const ref = useRef(null);
  const [hasFocus, SetFocus] = useState(false);

  return (
    <div
      className={`navbar-notification ${width && !input ? "hide" : ""}`}
      ref={ref}
    >
      <i
        className="fa-solid fa-bell"
        onClick={() => {
          setNotificationCont((state) => !state);
        }}
      ></i>
      {!notificationCont && (
        <NotifficationMovieCont
          hasFocus={hasFocus}
          SetFocus={SetFocus}
          containerRef={containerRef}
          movies={movies}
          setInputHide={setInputHide}
          setNotificationCont={setNotificationCont}
        />
      )}
    </div>
  );
}

export default Notification;
