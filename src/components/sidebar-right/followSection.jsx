import React from "react";
import WhoToFollow from "../../components/whoToFollow";

export default function FollowSection() {
  return (
    <>
      <div className="follow-section">
        <div className="follow-seaction-header">
          <h4>Who to follow</h4>
        </div>
        <div className="follow-section-content">
          <WhoToFollow />
        </div>
        <div className="follow-section-more hover-dark">
          <a href="#">Show more</a>
        </div>
      </div>
    </>
  );
}
