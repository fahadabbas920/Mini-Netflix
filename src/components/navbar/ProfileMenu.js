import React from "react";
import avatar from "../../assets/Netflix-avatar.png";
import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";

function ProfileMenu({ input }) {
  const width = useMediaPredicate("(max-width: 600px)");
  const [profileCont, setProfileCont] = useState(true);
  return (
    <div className={`navbar-profile ${width && !input ? "hide" : ""}`}>
      <div
        className="navbar-profile-btn"
        onClick={() => {
          // document
          //   .querySelector(".navbar-profile-container")
          //   .classList.toggle("hide");
          // profileCont.current.classList.toggle("hide");
          setProfileCont((state) => !state);
        }}
      >
        <div>
          <img src={avatar} alt="profile avatar" />
        </div>
        <div>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div className={`navbar-profile-container ${profileCont ? "hide" : ""}`}>
        <div>
          <div>
            <img src={avatar} alt="profile avatar" />
          </div>
          <div> Fiona</div>
        </div>
        <div>
          <div>
            <img src={avatar} alt="profile avatar" />
          </div>
          <div> Donkey</div>
        </div>
        <div>
          <div>
            <img src={avatar} alt="profile avatar" />
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
