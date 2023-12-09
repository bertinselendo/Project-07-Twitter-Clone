import React from "react";
import BackIcon from "../icons/backIcon";
import UserServices from "../../models/userServices";

export default function ProfileHeader() {

  const user = UserServices;
  const userPostsNumber = UserServices.getUserPostsNumber();

  return (
    <>
      <div className="profile-header">
        <div className="back-button">
          <a href="#">
            <BackIcon />
          </a>
        </div>
        <div className="profile-header-content">
          <p className="name">{user.getUserDisplayName()}</p>
          <p className="nbrs-post">{userPostsNumber} J'aime</p>
        </div>
      </div>
    </>
  );
}
