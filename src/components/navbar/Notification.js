import React from "react";
import { useState, useRef } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useSelector } from "react-redux/es/hooks/useSelector";
import NotifficationMovieCont from "./NotifficationMovieCont";
import { useDispatch } from "react-redux";
import { saveNotify } from "../../actions/movieActions";

function Notification({ input, setInputHide }) {
  const movies = useSelector((state) => state.movieArray);
  const notify = useSelector((state) => state.notify);
  const [notificationCont, setNotificationCont] = useState(true);
  const width = useMediaPredicate("(max-width: 600px)");
  const containerRef = useRef(null);
  const ref = useRef(null);
  // const [hasFocus, SetFocus] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className={`navbar-notification ${width && !input ? "hide" : ""}`}
      ref={ref}
    >
      <i
        className="fa-solid fa-bell"
        onClick={() => {
          if (notificationCont) {
            setNotificationCont(false);
          } else {
            setNotificationCont(true);
          }
          dispatch(saveNotify(0));
        }}
      ></i>
      {notify !== 0 && <span>{notify}</span>}
      {!notificationCont && (
        <NotifficationMovieCont
          // hasFocus={hasFocus}
          // SetFocus={SetFocus}
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
