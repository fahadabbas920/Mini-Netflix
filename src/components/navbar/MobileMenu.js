import React from "react";

function MobileMenu({ navLinks, setLinks }) {
  return (
    <div
      className={`cont ${navLinks ? "" : "active"}`}
      onClick={() => {
        setLinks();
      }}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}

export default MobileMenu;
