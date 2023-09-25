import React from "react";

// import { useState } from "react";

function Search({input,setInputHide}) {
  // const [input, setInput] = useState(true);


  return (
    <div className={`navbar-search ${input ? "width" : ""}`}>
      <input type="text" placeholder="Search" className={input ? "hide" : ""} />
      <i
        className=" fa-solid fa-magnifying-glass search-open"
        onClick={() => {
          setInputHide();
          // if (width) {
          //   notiCont.current.classList.add("hide");
          //   profCont.current.classList.add("hide");
          // } else {
          //   notiCont.current.classList.remove("hide");
          //   profCont.current.classList.remove("hide");
          // }
        }}
      ></i>
      <i
        className={`fa-solid fa-xmark search-close ${input ? "hide" : ""}`}
        onClick={() => {
          setInputHide();
          // if (width) {
          //   notiCont.current.classList.remove("hide");
          //   profCont.current.classList.remove("hide");
          // }
        }}
      ></i>
    </div>
  );
}

export default Search;
