import React from "react";
import Trends from "../trends";
import NavIcons from "../../templates/icons/navIcons";

export default function TrendsSection() {
  return (
    <>
      <div className="bg-gray rounded-xl flex flex-col">
        <div className="flex items-center justify-between gap-4 p-4">
          <h4 className="font-bold">Trends for you</h4>
          <span className="">
            <NavIcons
              icon="setting"
              className="hover:fill-blue-hover cursor-pointer"
            />
          </span>
        </div>
        <div className="">
          <Trends />
        </div>
        <div className="p-4 text-sm font-bold text-blue hover:text-blue-hover">
          <a href="#">Show more</a>
        </div>
      </div>
    </>
  );
}
