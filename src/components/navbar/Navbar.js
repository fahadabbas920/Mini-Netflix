import React from "react";
import logo from "../../assets/Netflix-Brand-Logo.png";
import ProfileMenu from "./ProfileMenu";
import Notification from "./Notification";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  const navigate = useNavigate();
  const containerRef = useRef();
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
            <img
              src={logo}
              alt="Netflix Logo"
              tabIndex={1}
              onClick={() => {
                navigate(`/`);
              }}
            />
          </div>
          <NavbarLinks navLinks={navLinks} setLinks={setLinks} containerRef={containerRef}/>
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
