import { useContext } from "react";
import TweetServices from "../models/tweetServices.js";
import TweetLayout from "../templates/tweet.jsx";
import { DataContext } from "./contextProvider.jsx";

function TweetsList() {
  const { contextData, setContextData } = useContext(DataContext);
  console.log(contextData);
  const newTweet = {
    id: 67383,
    authorID: 234,
    lastTime: "2024-01-20:18:30",
    text: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis",
    image: null,
    nbrs: {
      comment: 123,
      repost: 56,
      like: 678,
      view: 7890,
    },
  };
  // setContextData((contextData) => ({
  //   ...contextData,
  //   tweets: [...contextData.tweets, newTweet],
  // }));
  // const tweets = TweetServices.tweets();
  const tweets = contextData.tweets;
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
