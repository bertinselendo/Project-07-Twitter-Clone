import React from "react";
import Badges from "@templates/icons/badges";
import UsersServices from "../../models/usersServices";
import { Link } from "react-router-dom";
import Moreicon from "../../templates/icons/more";

export default function ProfileBottom() {
  const user = UsersServices;
  const currentUserID = user.currentUserID;

  return (
    <>
      <Link to={user.getUserName(currentUserID)} className="sl-bs-body">
        <div className="avatar-leftside">
          <img src={user.getUserAvatar(currentUserID)} alt="" />
        </div>
        <div className="sl-bs-body-content">
          <div className="sl-bs-body-title">
            {user.getUserDisplayName(currentUserID)}
            <span>{user.isUserCertified(currentUserID) ? <Badges badge="locked" /> : ""}</span>
          </div>
          <div className="sl-bs-body-username">{user.getUserName(currentUserID)}</div>
        </div>
      </Link>
      <div className="more-icon icon">
        <Moreicon />
      </div>
    </>
  );
}
