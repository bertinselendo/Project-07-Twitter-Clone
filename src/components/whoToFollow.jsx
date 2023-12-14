import React from "react";
import UsersServices from "../models/usersServices";
import WhoToFollowElement from "@components/sidebar-right/user/wotofollowElement";

export default function WhoToFollow() {
  const followLists = UsersServices.getWhoToFollow();

  return (
    <>
      {followLists.slice(0, 5).map((follow) => (
        <WhoToFollowElement key={follow.id} follow={follow} />
      ))}
    </>
  );
}
