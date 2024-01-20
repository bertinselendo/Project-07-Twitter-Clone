import React, { useState } from "react";
import ActionIcons from "../../templates/icons/actionIcons";

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
    <div className="flex gap-4 justify-between items-center w-full [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:text-sm">
      <span role="button" className=" text-text-gray group/comment">
        <ActionIcons
          icon="comment"
          className="fill-text-gray w-4 h-4 group-hover/comment:fill-blue"
        />
        <span className="group-hover/comment:text-blue">{nbrs.comment}</span>
      </span>
      <span role="button" className="text-text-gray group/repost">
        <ActionIcons
          icon="repost"
          className="fill-text-gray w-4 h-4 group-hover/repost:fill-green"
        />
        <span className="group-hover/repost:text-green">{nbrs.repost}</span>
      </span>
      <span
        role="button"
        className="text-text-gray group/like"
        onClick={handledLike}
      >
        <ActionIcons
          icon="like"
          className="fill-text-gray w-4 h-4 group-hover/like:fill-purple group-[.active]/like:fill-purple"
        />
        <span className="group-hover/like:text-purple group-[.active]/like:text-purple">
          {likes}
        </span>
      </span>
      <span role="button" className="text-text-gray group/stat">
        <ActionIcons
          icon="view"
          className="fill-text-gray w-4 h-4 group-hover/stat:fill-blue"
        />
        <span className="group-hover/stat:text-blue">{nbrs.views}</span>
      </span>
    </div>
  );
}
