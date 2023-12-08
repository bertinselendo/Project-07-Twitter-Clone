import React from "react";
import SidebarIcons from "../icons/sidebarIcons";
import Trends from "../../components/trends";

export default function TrendsSection() {
  return (
    <>
      <div className="trends-section">
        <div className="trends-seaction-header">
          <h4>Trends for you</h4>
          <span className="icon">
            <SidebarIcons icon="setting" />
          </span>
        </div>
        <div className="trends-section-content">
          <Trends />
        </div>
        <div className="trends-section-more">
          <a href="#">Show more</a>
        </div>
      </div>
    </>
  );
}
