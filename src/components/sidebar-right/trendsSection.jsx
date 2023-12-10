import React from "react";
import Trends from "../trends";
import NavIcons from "../../templates/icons/navIcons";

export default function TrendsSection() {
  return (
    <>
      <div className="trends-section">
        <div className="trends-seaction-header">
          <h4>Trends for you</h4>
          <span className="icon">
            <NavIcons icon="setting" />
          </span>
        </div>
        <div className="trends-section-content">
          <Trends />
        </div>
        <div className="trends-section-more hover-dark">
          <a href="#">Show more</a>
        </div>
      </div>
    </>
  );
}
