import React from "react";
import Badges from "@templates/icons/badges"
import { useParams } from "react-router-dom";
import ProfileInfos from "./profileInfos";

export default function ProfileContent({user}) {
  const { userName } = useParams("userName");

  return (
    <>
      <div className="profile-hero">
        <div className="profile-cover">
          <img src={user.cover} alt="" />
        </div>
        <div className="profile-hero-content">
          <div className="phc-row-1">
            <div className="phc-c1">
              <a href="#">
                <img src={user.avatar} alt="" className="profile-avatar" />
              </a>
              <h1 className="name">
                {user.displayName}{" "}
                {user.isCertified ? <Badges badge="certified" /> : ""}
              </h1>
              <p className="profile-username">@{userName}</p>
            </div>
            <div className="phc-c2">
              <a href="#" className="profile-edit-button hover-gray">
                Profile editor
              </a>
            </div>
          </div>
          <div className="phc-row-2">
            <div className="profile-description">
              <p>{user.description}</p>
            </div>
            <div className="profile-infos">
              <ProfileInfos infosData={user.infosData} />
            </div>
            <div className="profile-others">
              <a href="#" className="profile-other">
                <span>{user.follows}</span>
                <span className="text">abonnements</span>
              </a>
              <a href="#" className="profile-other">
                <span>{user.followers}</span>
                <span className="text">abonnés</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
