import React from "react";

export default function WhoToFollowElement(props) {
  const follow = props.follow;
  return (
    <>
      <div className="px-4 py-2 flex gap-2 items-center justify-between hover:bg-gray-hober cursor-pointer">
        <div className="flex gap-2 items-center">
          <div className="">
            <img
              src={follow.avatar}
              alt=""
              className="max-w-12 max-h-12 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-0">
            <h5 className="text-sm uppercase font-bold">
              {follow.displayName}
            </h5>
            <span className="text-xs font-thin text-text-gray">
              {follow.userName}
            </span>
          </div>
        </div>
        <div className="">
          <a
            href="#"
            className="text-sm bg-white text-black px-4 py-2 rounded-full hover:opacity-90"
          >
            Follow
          </a>
        </div>
      </div>
    </>
  );
}
