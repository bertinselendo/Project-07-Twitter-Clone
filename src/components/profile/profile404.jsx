import React from "react";
import BackIcon from "../../templates/icons/backIcon";
import { useNavigate } from "react-router-dom";

export default function Profile404({userName}) {
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
          <p className="name">Profile</p>
        </div>
      </div>
      <div className="profile-hero">
        <div className="profile-cover">
          <img src="" alt="" />
        </div>
        <div className="profile-hero-content">
          <div className="phc-row-1">
            <div className="phc-c1">
                <div className="profile-avatar" ><img src="" alt=""/></div>
              <h1 className="name">@{userName}</h1>
            </div>
          </div>
        </div>
        <div className="profile-error-content">
          <h2>Ce compte n'existe pas.</h2>
          <p>Essayez d'effectuer une autre recherche.</p>
        </div>
      </div>
    </>
  );
}
