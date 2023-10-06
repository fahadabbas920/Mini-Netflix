import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveList } from "../../actions/movieActions";
import { useSelector } from "react-redux/es/hooks/useSelector";

function MyListMovieThumb({ poster, ID }) {
  const myList = useSelector((state) => state.myList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleDispatch() {
    const newList = myList.filter((movie) => {
      return movie.id !== ID;
    });
    dispatch(saveList(newList));
  }
  return (
    <li
      className="mylist-item"
      onClick={() => {
        navigate(`/movie/${ID}`);
      }}
    >
      <i
        className="fa-solid fa-multiply"
        onClick={(e) => {
          e.stopPropagation();
          handleDispatch();
        }}
      ></i>
      <img src={poster} alt={`movie-poster :`} />
      {/*  ${ID} */}
    </li>
  );
}

export default MyListMovieThumb;
