import React from "react";
// import movie from "../../assets/movie.jpg";
import NotificationMovie from "./NotificationMovie";

function Notification() {
  return (
    <div className="navbar-notification">
      <div className="navbar-notification-container hide">
       <NotificationMovie/>
       <NotificationMovie/>
       <NotificationMovie/>
       <NotificationMovie/>
       <NotificationMovie/>
      </div>
      <i
        className="fa-solid fa-bell"
        onClick={() => {
          const notificationCont = document.querySelector(
            ".navbar-notification-container"
          );
          notificationCont.classList.toggle("hide");
        }}
      ></i>
    </div>
  );
}

export default Notification;
