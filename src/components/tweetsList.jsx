import TweetServices from "../models/tweetServices.js";
import TweetLayout from "../templates/tweet.jsx";

function TweetsList() {
  const tweets = TweetServices.tweets();
  const sortedTweets = TweetServices.sortTweets(tweets, "date", "lastTime");

  return (
    <>
      <div className="tweets">
        {sortedTweets.map((tweet) => (
          <TweetLayout key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </>
  );
}

export default TweetsList;
