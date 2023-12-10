import React from "react";

export default function WhoToFollowElement(props) {
  const follow = props.follow;
  return (
    <>
      <div className="follow-element hover-dark">
        <div className="follow-element-first">
          <div className="follow-element-image">
            <img src={follow.avatar} alt="" />
          </div>
          <div className="follow-element-content">
            <h5>{follow.displayName}</h5>
            <span>{follow.userName}</span>
          </div>
        </div>
        <div className="follow-element-btn ">
          <a href="#" className="hover-white-darkist">
            Follow
          </a>
        </div>
      </div>
    </>
  );
}
