import React from "react";
import ActionIcons from "../icons/actionIcons";

export default function TweetActions(props) {

  const nbrs = props;

  return (
    <div className="tweet-actions">
      <span
        role="button"
        className="tweet-action action-hover action-hover-blue"
      >
        <ActionIcons icon="comment" />
        {nbrs.comment}
      </span>
      <span
        role="button"
        className="tweet-action action-hover action-hover-green"
      >
        <ActionIcons icon="repost" />
        {nbrs.repost}
      </span>
      <span
        role="button"
        className="tweet-action action-hover action-hover-red"
      >
        <ActionIcons icon="like" />
        {nbrs.likes}
      </span>
      <span
        role="button"
        className="tweet-action action-hover action-hover-blue"
      >
        <ActionIcons icon="view" />
        {nbrs.views}
      </span>
    </div>
  );
}
