import React from "react";
import { useState } from "react";
import { useRef } from "react";
import FetchInput from "../dataFetch/FetchInput";
function Search({ input, setInputHide }) {
  const [movieName, setMovieName] = useState(null);
  const inputRef = useRef(null);
  return (
    <div className={`navbar-search ${input ? "width" : ""}`}>
      <input
        type="text"
        placeholder="Search"
        className={input ? "hide" : ""}
        ref={inputRef}
      />
      <i
        className=" fa-solid fa-magnifying-glass search-open"
        onClick={() => {
          if (input === true) {
            setInputHide();
          } else if (movieName !== inputRef.current.value) {
            // console.log(inputRef.current.value);
            setMovieName(inputRef.current.value);
          }
        }}
      ></i>
      <i
        className={`fa-solid fa-xmark search-close ${input ? "hide" : ""}`}
        onClick={() => {
          setInputHide();
          setMovieName(null);
          inputRef.current.value = null;
        }}
      ></i>
      {movieName && <FetchInput name={movieName} />}
    </div>
  );
}

export default Search;
