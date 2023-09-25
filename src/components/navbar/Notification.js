import React from "react";
// import movie from "../../assets/movie.jpg";
import NotificationMovie from "./NotificationMovie";
import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
function Notification({ input }) {
  const [notificationCont, setNotificationCont] = useState(true);
  const width = useMediaPredicate("(max-width: 600px)");

  return (
    <div className={`navbar-notification ${width && !input ? "hide" : ""}`}>
      <div
        className={`navbar-notification-container ${
          notificationCont ? "hide" : ""
        }`}
      >
        <NotificationMovie />
        <NotificationMovie />
        <NotificationMovie />
        <NotificationMovie />
        <NotificationMovie />
      </div>
      <i
        className="fa-solid fa-bell"
        onClick={() => {
          // const notificationCont = document.querySelector(
          //   ".navbar-notification-container"
          // );
          // notificationCont.classList.toggle("hide");
          // notificationCont.current.classList.toggle("hide");
          setNotificationCont((state) => !state);
        }}
      ></i>
    </div>
  );
}

export default Notification;
