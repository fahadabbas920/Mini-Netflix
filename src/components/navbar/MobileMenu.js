import React from "react";

function MobileMenu() {
  return (
    <div
      className="cont"
      onClick={() => {
        const cont = document.querySelector(".cont");
        const nav = document.querySelector(".navbar-links");
        //   nav.style.transform = "translateY(800px)"
        // nav.setAttribute("style", "transform: translateY(700px);");
        nav.classList.toggle("active-nav");
        cont.classList.toggle("active");
      }}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}

export default MobileMenu;
