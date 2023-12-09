import React, { useState } from "react";
import ActionIcons from "../icons/actionIcons";
import TweetServices from "../../models/tweetServices";

export default function TweetActions(props) {
  const nbrs = props;
  const tweetID = props.id;

  const [likes, setLike] = useState(nbrs.likes);

  function handledLike(event) {
    const classList = event.currentTarget.classList;

    classList.contains("active")
      ? (classList.remove("active"), setLike(likes - 1))
      : (classList.add("active"), setLike(likes + 1));
  }

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
        onClick={handledLike}
      >
        <ActionIcons icon="like" />
        {likes}
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
