import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import SearchMovie from "./SearchMovie";

function Search({ input, setInputHide }) {
  const [parameter, setParameter] = useState(null);
  const inputRef = useRef(null);
  const [string, setString] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    if (string) {
      axios
        .get(`https://yts.mx/ajax/search?query=${string}`, {
          signal: controller.signal,
        })
        .then((data) => {
          setData(data.data);
        })
        .catch((error) => console.log(error));
    }
    if (string === null) {
      controller.abort();
    }
    return () => {
      controller.abort();
    };
  }, [string]);
  return (
    <div className={`navbar-search ${input ? "width" : ""}`}>
      <input
        type="text"
        placeholder="Search"
        className={input ? "hide" : ""}
        ref={inputRef}
        tabIndex={0}
        onChange={(e) => {
          setString(e.target.value);
        }}
      />
      <i
        className=" fa-solid fa-magnifying-glass search-open"
        tabIndex={1}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            if (input === true) {
              setInputHide();
            } else if (parameter !== inputRef.current.value) {
              setParameter(inputRef.current.value);
            }
          }
        }}
        onClick={() => {
          inputRef.current.focus();
          if (input === true) {
            setInputHide();
          } else if (parameter !== inputRef.current.value) {
            setParameter(inputRef.current.value);
          }
        }}
      ></i>
      <i
        className={`fa-solid fa-xmark search-close ${input ? "hide" : ""}`}
        tabIndex={2}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            setInputHide();
            setParameter(null);
            inputRef.current.value = null;
            setString(null);
          }
        }}
        onClick={() => {
          inputRef.current.blur();
          setInputHide();
          setParameter(null);
          inputRef.current.value = null;
          setString(null);
        }}
      ></i>
      {string && data && <SearchMovie searchedMovies={data.data} />}
    </div>
  );
}

export default Search;
