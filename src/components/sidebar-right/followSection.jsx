import React from "react";
import WhoToFollow from "../../components/whoToFollow";

export default function FollowSection() {
  return (
    <>
      <div className="bg-gray rounded-xl flex flex-col">
        <div className="flex items-center justify-between gap-4 p-4">
          <h4 className="font-bold">Who to follow</h4>
        </div>
        <div className="">
          <WhoToFollow />
        </div>
        <div className="p-4 text-sm font-bold text-blue hover:text-blue-hover">
          <a href="#">Show more</a>
        </div>
      </div>
    </>
  );
}
