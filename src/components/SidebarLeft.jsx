import React from "react";
import { Link } from "react-router-dom";
import SidebarIcons from "../templates/sidebarIcons";
import TwitterIcon from "../templates/twitterIcon";

export default function SidebarLeft() {
  return (
    <div className="left-sidebar">
      <div className="sl-top-section">
        <ul className="navbar">
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <TwitterIcon />
                </span>
                <span className="twitter-icon">Twitter</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <SidebarIcons icon="home" />
                </span>
                Home
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <SidebarIcons icon="explore" />
                </span>
                Explore
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <span className="sl-notification">7</span>
                  <SidebarIcons icon="notification" />
                </span>
                Notifications
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <span className="sl-notification">3</span>
                  <SidebarIcons icon="message" />
                </span>
                Messages
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <span className="sl-notification">89</span>
                  <SidebarIcons icon="bookmark" />
                </span>
                Bookmarks
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <SidebarIcons icon="list" />
                </span>
                Lists
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <SidebarIcons icon="profil" />
                </span>
                Profil
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <SidebarIcons icon="more" />
                </span>
                More
              </div>
            </a>
          </li>
        </ul>
        <button className="button">Tweet</button>
      </div>
      <div className="sl-bottom-section">Bottom</div>
    </div>
  );
}
