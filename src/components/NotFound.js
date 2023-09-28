import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h1>Oops, It's a blunder.</h1>
      <p>Error: 404: Resource Not Found.</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Netflix Home
      </button>
    </div>
  );
}

export default NotFound;
