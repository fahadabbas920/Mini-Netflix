import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { saveList } from "../../actions/movieActions";

function MainMoviePoster({ data }) {
  const navigate = useNavigate();
  const myList = useSelector((state) => state.myList);
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const isSave =
      myList?.filter((movie) => {
        return movie?.id === data?.id;
      }).length > 0;

    if (isSave) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [data.id, myList]);
  function handleSave() {
    if (saved) {
      const newList = myList?.filter((movie) => {
        return movie?.id !== data?.id;
      });
      dispatch(saveList(newList));
    } else {
      dispatch(saveList([data, ...myList]));
    }
  }

  return (
    <>
      <div className="main-movie">
        <h1 className="main-movie-title">{data?.title}</h1>
        <p className="main-movie-description">
          {data?.description_full.slice(0, 150)}
        </p>
      </div>
      <div className="main-button-links">
        <button
          onClick={() => {
            navigate(`/movie/${data.id}`);
          }}
        >
          <i className="fa-solid fa-play"></i>Play
        </button>
        <button
          onClick={() => {
            // navigate(`/movie/${data.imdbID}`);
            navigate(`/mov`);
          }}
        >
          <i className="fa-solid fa-circle-info"></i>More Info
        </button>

        <button
          onClick={() => {
            handleSave();
          }}
        >
          {saved ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </button>
      </div>
    </>
  );
}

export default MainMoviePoster;
