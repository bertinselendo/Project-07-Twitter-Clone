import React from "react";
import Navbar from "@components/sidebar-left/navbar";
import ProfileBottom from "@components/sidebar-left/profileBottom";

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
