import React from "react";
import BackIcon from "../../templates/icons/backIcon";
import UserServices from "../../models/userServices";
import { useNavigate } from "react-router-dom";

export default function ProfileHeader() {
  const user = UserServices;
  const userPostsNumber = UserServices.getUserPostsNumber();
  const navigate = useNavigate();

  return (
    <>
      <div className="profile-header">
        <div className="back-button">
          <a href="#" onClick={() => navigate(-1)}>
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
