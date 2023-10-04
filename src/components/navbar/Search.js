import React from "react";
import { useState } from "react";
import { useRef } from "react";
import FetchInput from "../dataFetch/FetchInput";
function Search({ input, setInputHide }) {
  const [parameter, setParameter] = useState(null);
  const inputRef = useRef(null);
  const [render, setRender] = useState(false);
  return (
    <div className={`navbar-search ${input ? "width" : ""}`}>
      <input
        type="text"
        placeholder="Search"
        className={input ? "hide" : ""}
        ref={inputRef}
        onChange={(e) => {
          console.log(e);
          if (e.isPropagationStopped) {
            // setTimeout(() => {
              console.log("Fetch");
              
            // }, 2000);
          }
        }}
        // onBlur={() => {
        //   console.log("Blurred");
        // }}
        // onFocus={() => {
        //   console.log("Focused");
        // }}
      />
      <i
        className=" fa-solid fa-magnifying-glass search-open"
        onClick={() => {
          if (input === true) {
            setInputHide();
          } else if (parameter !== inputRef.current.value) {
            setParameter(inputRef.current.value);
            setRender(true);
          }
        }}
        ></i>
      <i
        className={`fa-solid fa-xmark search-close ${input ? "hide" : ""}`}
        onClick={() => {
          setInputHide();
          setParameter(null);
          inputRef.current.value = null;
          setRender(false);
        }}
      ></i>
      {render && <FetchInput parameter={parameter} />}
    </div>
  );
}

export default Search;
