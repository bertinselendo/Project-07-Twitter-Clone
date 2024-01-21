import TweetServices from "../models/tweetServices";
import Badges from "./icons/badges";
import TweetImages from "../components/tweet/tweetImages";
import parse from "html-react-parser";
import TweetActions from "../components/tweet/tweetActions";
import { Link } from "react-router-dom";
import tweetTimeDifference from "../models/date";

function TweetLayout(props) {
  const tweet = props.tweet;

  const author = TweetServices.getAuthorTweet(tweet.authorID);
  const lastTime = tweetTimeDifference(tweet.lastTime);

  return (
    <div className="flex gap-4 p-4 w-full border-b border-gray-text">
      <div className="">
        <Link to={"/" + author.userName}>
          <img
            src={author.avatar}
            alt=""
            className="max-w-12 max-h-12 rounded-full"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-1 items-center">
          <Link to={author.userName}>
            <h3 className="">{author.displayName}</h3>
          </Link>
          <span className="">
            {author.isCertified && (
              <Badges badge="certified" className="w-4 fill-blue" />
            )}
          </span>
          <span className="">@{author.userName}</span>
          <span className="">·</span>
          <span className="">{lastTime}</span>
        </div>
        <div className="">{parse(tweet.text)}</div>
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
