import React from "react";
import Navbar from "@components/sidebar-left/navbar";
import ProfileBottom from "@components/sidebar-left/profileBottom";

export default function SidebarLeft() {
  return (
    <div className="flex flex-col justify-between w-[260px] h-screen sticky top-0">
      <div className="pr-4">
        <Navbar />
        <button className="bg-blue font-bold p-3 w-full mt-4 rounded-full hover:bg-blue-hover">
          Tweet
        </button>
      </div>
      <div className="bg-black rounded-4 flex w-[100%] items-center justify-between sticky bottom-0">
        <ProfileBottom />
      </div>
    </div>
  );
}
