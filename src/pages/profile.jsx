import React from "react";
import BackIcon from "../templates/icons/backIcon";
import UserServices from "../models/userServices";
import ProfileInfos from "../templates/profile/profileInfos";
import ProfileHeader from "../templates/profile/profileHeader";

function Profile() {
  const user = UserServices;

  return (
    <>
      <ProfileHeader />
      <div className="profile-hero">
        <div className="profile-cover">
          <img src={user.getUserCover()} alt="" />
        </div>
        <div className="profile-hero-content">
          <div className="phc-row-1">
            <div className="phc-c1">
              <a href="#">
                <img
                  src={user.getUserAvatar()}
                  alt=""
                  className="profile-avatar"
                />
              </a>
              <h1 className="name">{user.getUserDisplayName()}</h1>
              <p className="profile-username">{user.getUserName()}</p>
            </div>
            <div className="phc-c2">
              <a href="#" className="profile-edit-button hover-gray">
                Profile editor
              </a>
            </div>
          </div>
          <div className="phc-row-2">
            <div className="profile-description">
              <p>{user.getUserDescription()}</p>
            </div>
            <div className="profile-infos">
              <ProfileInfos />
            </div>
            <div className="profile-others">
              <a href="#" className="profile-other">
                <span>{user.getUserFollows()}</span>
                <span className="text">abonnements</span>
              </a>
              <a href="#" className="profile-other">
                <span>{user.getUserFollowers()}</span>
                <span className="text">abonnés</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
