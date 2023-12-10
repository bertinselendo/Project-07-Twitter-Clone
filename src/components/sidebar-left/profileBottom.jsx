import React from "react";
import Badges from "@templates/icons/badges";
import UserServices from "../../models/userServices";
import { Link } from "react-router-dom";
import Moreicon from "../../templates/icons/more";

export default function ProfileBottom() {
  const user = UserServices;

  return (
    <>
      <Link to="/profile" className="sl-bs-body">
        <div className="avatar-leftside">
          <img src={user.getUserAvatar()} alt="" />
        </div>
        <div className="sl-bs-body-content">
          <div className="sl-bs-body-title">
            {user.getUserDisplayName()}
            <span>{user.isCertified() ? <Badges badge="locked" /> : ""}</span>
          </div>
          <div className="sl-bs-body-username">{user.getUserName()}</div>
        </div>
      </Link>
      <div className="more-icon icon">
        <Moreicon />
      </div>
    </>
  );
}
