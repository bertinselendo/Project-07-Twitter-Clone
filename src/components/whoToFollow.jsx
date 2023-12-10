import React from "react";
import UserServices from "../models/userServices";
import WhoToFollowElement from "@components/sidebar-right/user/wotofollowElement";

export default function WhoToFollow() {
  const followLists = UserServices.getWhoToFollow();

  return (
    <>
      {followLists.slice(0, 5).map((follow) => (
        <WhoToFollowElement key={follow.id} follow={follow} />
      ))}
    </>
  );
}
