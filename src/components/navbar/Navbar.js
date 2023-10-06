import React from "react";
import logo from "../../assets/Netflix-Brand-Logo.png";
import ProfileMenu from "./ProfileMenu";
import Notification from "./Notification";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [input, setInput] = useState(true);
  function setInputHide() {
    setInput((state) => !state);
  }

  // const [hideOthers, setHideOthers] = useState(true);
  // function setHideOthersHandler() {
  //   setInput((state) => !state);
  // }

  const [navLinks, setNavLinks] = useState(true);
  function setLinks() {
    setNavLinks((state) => !state);
  }

  return (
    <div className="navbar">
      <header className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-img-container">
            <img
              src={logo}
              alt="Netflix Logo"
              tabIndex={1}
              onClick={() => {
                navigate(`/`);
              }}
            />
          </div>
          <div className={`navbar-links ${navLinks ? "" : "active-nav"}`}>
            <ul>
              <li>
                <Link to="/" onClick={setLinks}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" onClick={setLinks}>
                  TV Shows
                </Link>
              </li>
              <li>
                <Link to="/" onClick={setLinks}>
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/" onClick={setLinks}>
                  Recently Added
                </Link>
              </li>
              <li>
                <Link to="/mylist" onClick={setLinks}>
                  My List
                </Link>
              </li>
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
