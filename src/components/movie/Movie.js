import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";
function Movie() {
  const id = useParams();
  //   console.log(id);
  return <div className="movie-container">Movie : {id.name}</div>;
}

export default Movie;
