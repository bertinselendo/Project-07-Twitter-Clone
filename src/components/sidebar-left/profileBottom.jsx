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
      <Link
        to={user.getUserName(currentUserID)}
        className="flex items-center p-2"
      >
        <div className="">
          <img
            src={user.getUserAvatar(currentUserID)}
            alt=""
            className="w-10 rounded-full mr-2"
          />
        </div>
        <div className="flex flex-col gap-0">
          <div className="flex items-center gap-2 text-base font-bold">
            {user.getUserDisplayName(currentUserID)}
            <span className="">
              {user.isUserCertified(currentUserID) ? (
                <Badges badge="locked" className="w-3" />
              ) : (
                ""
              )}
            </span>
          </div>
          <div className="text-sm text-text-gray">
            {user.getUserName(currentUserID)}
          </div>
        </div>
      </Link>
      <div className="hover:bg-gray rounded-full w-10 h-10 flex justify-center items-center mr-2 cursor-pointer">
        <Moreicon />
      </div>
    </>
  );
}
