import React from "react";
import TwitterIcon from "../icons/twitterIcon";
import NavIcons from "../icons/navIcons";

function getNavbarItems() {
  const navbarItems = [
    {
      icon: "twitter",
      text: false,
      nbrs: false,
    },
    {
      icon: "home",
      text: "Home",
      nbrs: false,
    },
    {
      icon: "explore",
      text: "Explore",
      nbrs: false,
    },
    {
      icon: "notification",
      text: "Notifications",
      nbrs: 7,
    },
    {
      icon: "message",
      text: "Messages",
      nbrs: 3,
    },
    {
      icon: "bookmark",
      text: "Bookmarks",
      nbrs: 89,
    },
    {
      icon: "list",
      text: "Lists",
      nbrs: false,
    },
    {
      icon: "profil",
      text: "Profil",
      nbrs: false,
    },
    {
      icon: "more",
      text: "More",
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
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  {navItem.nbrs != false ? (
                    <span className="sl-notification">7</span>
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
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
