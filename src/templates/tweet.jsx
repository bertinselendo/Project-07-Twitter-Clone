import TweetServices from "../models/tweetServices";
import Badges from "./icons/badges";
import TweetImages from "../components/tweet/tweetImages";
import parse from "html-react-parser";
import TweetActions from "../components/tweet/tweetActions";

function TweetLayout(props) {
  const tweet = props.tweet;

  const author = TweetServices.getAuthorTweet(tweet.authorID);

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={author.avatar} alt="" />
      </div>
      <div className="tweet-content">
        <div className="tweet-title">
          <h3 className="tweet-title-author">{author.displayName}</h3>
          <span className="tweet-title-details">
            {author.isCertified && <Badges badge="certified" />}
          </span>
          <span className="tweet-title-details">{author.userName}</span>
          <span className="tweet-title-details">·</span>
          <span className="tweet-title-details">{tweet.lastTime}</span>
        </div>
        <div className="tweet-text">{parse(tweet.text)}</div>
        <TweetImages images={tweet.image} />
        <TweetActions
          id={tweet.id}
          comment={tweet.nbrs.comment}
          repost={tweet.nbrs.repost}
          likes={tweet.nbrs.like}
          views={tweet.nbrs.view}
        />
      </div>
    </div>
  );
}

export default TweetLayout;
