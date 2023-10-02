import React from "react";
// import { useEffect } from "react";
import useFetch from "../../useFetch/useFetch";
// import { saveSearched } from "../../actions/movieActions";
import SearchMovie from "../navbar/SearchMovie";
// import { useDispatch } from "react-redux";

function FetchInput({ name }) {
  const key = "7d9f393";
  const url = `http://www.omdbapi.com/?t=${name}&apikey=${key}`;
  const { data, error } = useFetch(url);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   let Movies;
  //   if (data.length !== 0) {
  //     Movies = data[0].
  //   }
  //   dispatch(saveTrailer(Movies));
  // }, [dispatch, data]);

  return <>{data.length !== 0 && <SearchMovie dataA={data[0].data} />}</>;
}

export default FetchInput;
