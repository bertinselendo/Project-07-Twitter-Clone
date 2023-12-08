import React from "react";
import Moreicon from "../../../templates/icons/more";

export default function WhoToFollowElement(props) {
  const follow = props.follow;
  console.log(follow);
  return (
    <>
      <div className="follow-element">
        <div className="follow-element-first">
          <div className="follow-element-image">
            <img src={follow.avatar} alt="" />
          </div>
          <div className="follow-element-content">
            <h5>{follow.displayName}</h5>
            <span>{follow.userName}</span>
          </div>
        </div>
        <div className="follow-element-btn">
          <a href="#">Follow</a>
        </div>
      </div>
    </>
  );
}
