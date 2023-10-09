import React from "react";
import avatar1 from "../../assets/Netflix-avatar.png";
import avatar2 from "../../assets/Netflix-avatar2.jpg";
import avatar3 from "../../assets/Netflix-avatar3.jpg";
import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";

function ProfileMenu({ input }) {
  const width = useMediaPredicate("(max-width: 600px)");
  const [profileCont, setProfileCont] = useState(true);
  return (
    <div
      className={`navbar-profile ${width && !input ? "hide" : ""}`}
      onMouseEnter={() => {
        setProfileCont(false);
      }}
      onMouseLeave={() => {
        setProfileCont(true);
      }}
    >
      <div className="navbar-profile-btn">
        <div>
          <img src={avatar1} alt="profile avatar" />
        </div>
        <div>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div
        className={`navbar-profile-container ${profileCont ? "hide" : ""}`}
        onMouseEnter={() => {
          setProfileCont(false);
        }}
        onMouseLeave={() => {
          setProfileCont(true);
        }}
      >
        <div>
          <div>
            <img src={avatar1} alt="profile avatar" />
          </div>
          <div> Fiona</div>
        </div>
        <div>
          <div>
            <img src={avatar2} alt="profile avatar" />
          </div>
          <div> Donkey</div>
        </div>
        <div>
          <div>
            <img src={avatar3} alt="profile avatar" />
          </div>
          <div> Shrek</div>
        </div>
        <div>
          <div>
            <i className="fa-solid fa-pen"></i>
          </div>{" "}
          <div>Manage Profiles</div>
        </div>
        <div>
          <div>
            <i className="fa-regular fa-user"></i>
          </div>{" "}
          <div>Account</div>
        </div>
        <div>
          <div>
            <i className="fa-regular fa-circle-question"></i>
          </div>
          <div>Help Centre</div>
        </div>
        <div>Sign out of Netflix</div>
      </div>
    </div>
  );
}

export default ProfileMenu;
