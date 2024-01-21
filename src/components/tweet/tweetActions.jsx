import React, { useContext, useState } from "react";
import ActionIcons from "../../templates/icons/actionIcons";
import LikesServices from "../../models/likesServices";
import { DataContext } from "../contextProvider";

export default function TweetActions(props) {
  const nbrs = props;
  const tweetID = props.id;

  const { contextData, setContextData } = useContext(DataContext);
  const currentUserID = contextData["current-user"].id;
  const likesData = contextData.likes;
  const likes = LikesServices.getLikes(likesData, tweetID);

  const isLiked = LikesServices.isPostLiked(likesData, tweetID, currentUserID);

  function handledLike(event) {
    const classList = event.currentTarget.classList;

    const isLiked = LikesServices.isPostLiked(
      likesData,
      tweetID,
      currentUserID
    );

    if (!isLiked) {
      const response = LikesServices.postLike(
        contextData,
        setContextData,
        tweetID,
        currentUserID
      );

      if (response) {
        classList.add("active");
      }
    } else {
      const response = LikesServices.deleteLike(
        contextData,
        setContextData,
        tweetID,
        currentUserID
      );

      if (response) {
        classList.remove("active");
      }
    }
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
        className={"text-text-gray group/like " + (isLiked ? "active" : "none")}
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
