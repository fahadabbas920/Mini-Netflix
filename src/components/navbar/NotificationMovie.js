import React from "react";
import { useNavigate } from "react-router-dom";
function NotificationMovie({ title, plot, poster, uniq }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/movie/${uniq}`);
      }}
    >
      <div>
        <img src={poster} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{plot}</p>
      </div>
    </div>
  );
}

export default NotificationMovie;
