import React from "react";

function Notification() {
  return (
    <div className="navbar-notification">
      <div className="navbar-notification-container hide">
        <div>Movie 1</div>
        <div>Movie 2</div>
        <div>Movie 3</div>
        <div>Movie 4</div>
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
