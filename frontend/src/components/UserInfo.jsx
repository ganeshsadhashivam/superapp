import React from "react";
import UserImage from "../assets/image 14.png";
const UserInfo = () => {
  return (
    <div className="user-general-info">
      <div className="user-details-dash-timer-notes">
        <img src={UserImage} alt="" id="useravatar" />
        <div className="user-info-dash-timer-notes">
          <div>
            <p id="username-dash-timer-notes">ganesh</p>
          </div>
          <div>
            <p id="email-dash-timer-notes">ganeshsadhashivam@outlook.com</p>
          </div>
          <div>
            <p id="name-dash-timer-notes">ganesh</p>
          </div>
          <div className="movie-categories-dash-timer-notes">
            <div>
              <p>horror</p>
            </div>
            <div>
              <p>thriller</p>
            </div>
            <div>
              <p>action</p>
            </div>
            <div>
              <p>fiction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
