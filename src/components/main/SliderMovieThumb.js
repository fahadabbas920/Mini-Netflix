import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { saveList } from "../../actions/movieActions";
import { useEffect, useState } from "react";

function SliderMovieThumb({ poster, ID }) {
  const myList = useSelector((state) => state.myList);
  const movies = useSelector((state) => state.movieArray);
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const isSave =
      myList.filter((movie) => {
        return movie.id === ID;
      }).length > 0;
    if (isSave) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [ID, myList]);

  function handleSave() {
    if (saved) {
      const newList = myList.filter((movie) => {
        return movie.id !== ID;
      });
      dispatch(saveList(newList));
    } else {
      const addMovie = movies.filter((movie) => {
        return movie.id === ID;
      });
      dispatch(saveList([...addMovie, ...myList]));
    }
  }
  const navigate = useNavigate();
  return (
    <li className="item">
      <img src={poster} alt={`movie-poster : ${ID}`} />
      <i
        className="fa-solid fa-play"
        onClick={() => {
          navigate(`/movie/${ID}`);
        }}
      ></i>
      {saved ? (
        <i
          className="fa-solid fa-check"
          onClick={() => {
            handleSave();
          }}
        ></i>
      ) : (
        <i
          className="fa-solid fa-plus"
          onClick={() => {
            handleSave();
          }}
        ></i>
      )}
    </li>
  );
}

export default SliderMovieThumb;
