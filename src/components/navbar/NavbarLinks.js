import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function NavbarLinks({ navLinks, setLinks, containerRef }) {
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [containerRef]);

  return (
    <div
      className={`navbar-links ${navLinks ? "" : "active-nav"}`}
      ref={containerRef}
    >
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
  );
}

export default NavbarLinks;
