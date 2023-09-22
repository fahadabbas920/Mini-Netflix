import React from "react";

function Search() {
  return (
    <div className="navbar-search width">
      <input type="text" placeholder="Search" className="hide" />
      <i
        className=" fa-solid fa-magnifying-glass search-open "
        onClick={() => {
          const input = document.querySelector(".navbar-search input");
          const inputCont = document.querySelector(".navbar-search");
          const sClose = document.querySelector(".search-close");
          input.classList.remove("hide");
          inputCont.classList.remove("width");
          sClose.classList.remove("hide");
          console.log(window.innerWidth);
          if (window.innerWidth <= 600) {
            // console.log( document
            // .querySelector(".navbar-notification"))
            //   inputCont.style.flexGrow = "1"
            document
              .querySelector(".navbar-notification")
              .classList.add("hide");
            document.querySelector(".navbar-profile").classList.add("hide");
          }
        }}
      ></i>
      <i
        className="fa-solid fa-xmark search-close hide"
        onClick={() => {
          const input = document.querySelector(".navbar-search input");
          const inputCont = document.querySelector(".navbar-search");
          const sClose = document.querySelector(".search-close");
          input.classList.add("hide");
          inputCont.classList.add("width");
          sClose.classList.add("hide");
          if (window.innerWidth <= 600) {
            document
              .querySelector(".navbar-notification")
              .classList.remove("hide");
            document.querySelector(".navbar-profile").classList.remove("hide");
          }
        }}
      ></i>
    </div>
  );
}

export default Search;
