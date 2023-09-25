import React from "react";
import logo from "../../assets/Netflix-Brand-Logo.png";
import ProfileMenu from "./ProfileMenu";
import Notification from "./Notification";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import { useState } from "react";

function Navbar() {
  const [input, setInput] = useState(true);
  function setInputHide() {
    setInput((state) => !state);
  }
  const [navLinks, setNavLinks] = useState(true);
  function setLinks() {
    setNavLinks((state) => !state);
  }
  return (
    <div className="navbar">
      <header className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-img-container">
            <img src={logo} alt="Netflix Logo" />
          </div>
          <div className={`navbar-links ${navLinks ? "" : "active-nav"}`}>
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Recently Added</li>
              <li>My List</li>
            </ul>
          </div>
        </div>
        <div className="navbar-right">
          <Search input={input} setInputHide={setInputHide} />
          <Notification input={input} />
          <ProfileMenu input={input} />
          <MobileMenu navLinks={navLinks} setLinks={setLinks} />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
