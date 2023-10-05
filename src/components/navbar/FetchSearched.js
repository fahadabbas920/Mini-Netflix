// import React from "react";
import useFetch from "../../useFetch/useFetch";

function FetchSearched({ params }) {
  const { data } = useFetch(`https://yts.mx/ajax/search?query=${params}`);
  return {data};
}

export default FetchSearched;
