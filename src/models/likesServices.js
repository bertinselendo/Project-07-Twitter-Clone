class LikesServices {
  static getLikes(likesDatas, postID) {
    const likes = likesDatas.filter((likes) => likes.post_id == postID);
    if (likes.length == 0) {
      return 0;
    } else {
      return likes.length;
    }
  }

  static postLike(contextDatas, setter, postID, userID) {
    const randomNum = Math.floor(Math.random() * 10000);

    const newLike = {
      id: randomNum,
      post_id: postID,
      user_id: userID,
    };
    setter({ ...contextDatas, likes: [...contextDatas.likes, newLike] });

    return true;
  }

  static deleteLike(contextDatas, setter, postID, userID) {
    setter({
      ...contextDatas,
      likes: contextDatas.likes.filter(
        (like) => like.post_id !== postID || like.user_id !== userID
      ),
    });

    return true;
  }

  static isPostLiked(likesDatas, postID, userID) {
    const likes = likesDatas.filter(
      (likes) => likes.post_id == postID && likes.user_id == userID
    );
    if (likes.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

export default LikesServices;
