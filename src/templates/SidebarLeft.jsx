import React from "react";
import { Link } from "react-router-dom";
import Badges from "./icons/badges";
import Navbar from "./sidebar-left/navbar";
import ProfileBottom from "./sidebar-left/profileBottom";

export default function SidebarLeft() {
  return (
    <div className="left-sidebar">
      <div className="sl-top-section">
        <Navbar />
        <button className="button">Tweet</button>
      </div>
      <div className="sl-bottom-section hover-gray hover-radius">
        <ProfileBottom />
      </div>
    </div>
  );
}
