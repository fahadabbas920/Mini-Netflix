import React, { useEffect, useState, useRef } from "react";
// import FetchInput from "../dataFetch/FetchInput";
import useFetch from "../../useFetch/useFetch";
// import axios from "axios";
// import FetchSearched from "./FetchSearched";
import SearchMovie from "./SearchMovie";

function Search({ input, setInputHide }) {
  const [parameter, setParameter] = useState(null);
  const inputRef = useRef(null);
  // const [render, setRender] = useState(false);
  const [string, setString] = useState(null);
  const [dataa, setData] = useState([]);
  // controller.abort()
  const { data, controller } = useFetch(
    `https://yts.mx/ajax/search?query=${string}`
  );
  // controller.abort()
  useEffect(() => {
    // controller.signal.aborted = false
    console.log(controller.signal.aborted);
    // controller.signal
    if (string) {
      setData(data.data);
    }
    // controller.abort();
    /////////////////////////////////////
    // const controller = new AbortController();
    // if (string) {
    //   axios
    //     .get(`https://yts.mx/ajax/search?query=${string}`, {
    //       signal: controller.signal,
    //     })
    //     .then((data) => {
    //       setData(data.data);
    //     })
    //     .catch((error) => console.log(error));
    // }
    // return () => {
    //   if (string) {
    //     console.log("here");
    //     controller.abort();
    //   }
    // };
  }, [string, controller, data.data]);
  // console.log(data);
  return (
    <div className={`navbar-search ${input ? "width" : ""}`}>
      <input
        type="text"
        placeholder="Search"
        className={input ? "hide" : ""}
        ref={inputRef}
        onChange={(e) => {
          // controller.abort()
          setString(e.target.value);
        }}
      />
      <i
        className=" fa-solid fa-magnifying-glass search-open"
        onClick={() => {
          if (input === true) {
            setInputHide();
          } else if (parameter !== inputRef.current.value) {
            // setRender(true);
            setParameter(inputRef.current.value);
          }
        }}
      ></i>
      <i
        className={`fa-solid fa-xmark search-close ${input ? "hide" : ""}`}
        onClick={() => {
          setInputHide();
          setParameter(null);
          inputRef.current.value = null;
          setString(null);
        }}
      ></i>
      {/* {render && <FetchInput parameter={parameter} />} */}
      {string && <SearchMovie searchedMovies={dataa.data} />}
    </div>
  );
}

export default Search;
