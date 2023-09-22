import React from "react";
import logo from "../../assets/Netflix-Brand-Logo.png";
import ProfileMenu from "./ProfileMenu";
import Notification from "./Notification";
import MobileMenu from "./MobileMenu";
import Search from "./Search";

function Navbar() {
  return (
    <div className="navbar">
      <header className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-img-container">
            <img src={logo} alt="Netflix Logo" />
          </div>
          <div className="navbar-links">
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
          <Search />
          <Notification />
          <ProfileMenu />
          <MobileMenu />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
