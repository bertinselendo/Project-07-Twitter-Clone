import React from "react";
import TwitterIcon from "@templates/icons/twitterIcon";
import NavIcons from "@templates/icons/navIcons";
import { Link } from "react-router-dom";
import NavbarItems from "./navbarData";

export default function Navbar() {
  const navbarItems = NavbarItems.getNavbarItems();

  return (
    <>
      <ul className="navbar">
        {navbarItems.map((navItem, index) => (
          <li key={index} className="hover-gray hover-radius">
            <Link to={navItem.link}>
              <div className="li-div">
                <span className="sl-icon">
                  {navItem.nbrs != false ? (
                    <span className="sl-notification">{navItem.nbrs}</span>
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
