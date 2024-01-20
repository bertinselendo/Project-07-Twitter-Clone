import React from "react";
import SearchIcon from "@templates/icons/search";

export default function SearchBar() {
  return (
    <>
      <div className="w-full relative">
        <form action="w-full">
          <span className="absolute left-0 p-4">
            <SearchIcon className="" />
          </span>
          <input
            type="text"
            placeholder="Rechercher"
            className="bg-gray outline-none w-full h-12 pl-10 rounded-full text-sm placeholder:opacity-50"
          />
        </form>
      </div>
    </>
  );
}
