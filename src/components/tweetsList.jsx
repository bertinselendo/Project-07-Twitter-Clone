import TweetServices from "../models/tweetServices.js";
import TweetLayout from "../templates/tweet.jsx";

function TweetsList() {
  const tweets = TweetServices.tweets();

  return (
    <>
      <div className="tweets">
        {tweets.map((tweet) => (
          <TweetLayout key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </>
  );
}

export default TweetsList;
