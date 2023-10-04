// import React from "react";
import useFetch from "../../useFetch/useFetch";
import SearchMovie from "../navbar/SearchMovie";

function FetchInput({ parameter }) {
  const url = `https://yts.mx/ajax/search?query=${parameter}`;
  const { data } = useFetch(url);

  // if (data.length !== 0) {
  //   // setRender(false)
  // }
    return <>{data.length !== 0 && <SearchMovie searchedMovies={data.data.data} />}</>;
}

export default FetchInput;
