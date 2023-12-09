import React from "react";
import TwitterIcon from "../icons/twitterIcon";
import NavIcons from "../icons/navIcons";
import { Link } from "react-router-dom";

function getNavbarItems() {
  const navbarItems = [
    {
      icon: "twitter",
      text: false,
      link: "/",
      nbrs: false,
    },
    {
      icon: "home",
      text: "Home",
      link: "/",
      nbrs: false,
    },
    {
      icon: "explore",
      text: "Explore",
      link: "/explore",
      nbrs: false,
    },
    {
      icon: "notification",
      text: "Notifications",
      link: "/notifications",
      nbrs: 7,
    },
    {
      icon: "message",
      text: "Messages",
      link: "/messages",
      nbrs: 3,
    },
    {
      icon: "bookmark",
      text: "Bookmarks",
      link: "/bookmarks",
      nbrs: 89,
    },
    {
      icon: "list",
      text: "Lists",
      link: "/lists",
      nbrs: false,
    },
    {
      icon: "profil",
      text: "Profil",
      link: "/profile",
      nbrs: false,
    },
    {
      icon: "more",
      text: "More",
      link: "#",
      nbrs: false,
    },
  ];

  return navbarItems;
}

export default function Navbar() {
  const navbarItems = getNavbarItems();

  return (
    <>
      <ul className="navbar">
        {navbarItems.map((navItem) => (
          <li className="hover-gray hover-radius">
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
