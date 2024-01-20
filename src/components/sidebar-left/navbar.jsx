import React from "react";
import TwitterIcon from "@templates/icons/twitterIcon";
import NavIcons from "@templates/icons/navIcons";
import { Link } from "react-router-dom";
import NavbarItems from "./navbarData";

export default function Navbar() {
  const navbarItems = NavbarItems.getNavbarItems();

  return (
    <>
      <ul className="mt-4">
        {navbarItems.map((navItem, index) => (
          <li key={index}>
            <Link
              to={navItem.link}
              className="flex hover:bg-gray p-4 rounded-full w-fit mr-4"
            >
              <div className="flex gap-4 align-middle font-bold">
                <span className="relative">
                  {navItem.nbrs != false ? (
                    <span className="absolute top-[-12px] right-[-12px] bg-blue text-[10px] rounded-full flex h-5 w-5 items-center justify-center">
                      {navItem.nbrs}
                    </span>
                  ) : (
                    ""
                  )}

                  {navItem.icon == "twitter" ? (
                    <TwitterIcon />
                  ) : (
                    <NavIcons icon={navItem.icon} />
                  )}
                </span>
                {navItem.text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
