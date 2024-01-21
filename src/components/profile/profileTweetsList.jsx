import { useContext } from "react";
import { DataContext } from "../contextProvider";
import TweetServices from "../../models/tweetServices";
import TweetLayout from "../../templates/tweet";

function ProfileTweetsList({ user }) {
  const { contextData } = useContext(DataContext);
  const userID = user.id;
  const userDisplayName = user.displayName;
  const tweets = contextData.tweets;
  const userTweets = TweetServices.getUserTweets(tweets, userID);
  const sortedTweets = TweetServices.sortTweets(userTweets, "date", "lastTime");

  return (
    <>
      <h2 className="font-bold text-xl p-4">Posts de {userDisplayName}</h2>
      {sortedTweets.length != 0 ? (
        <div className="tweets">
          {sortedTweets.map((tweet) => (
            <TweetLayout key={tweet.id} tweet={tweet} />
          ))}
        </div>
      ) : (
        <div className="h-24 flex justify-center items-center">
          <p>C'est vide ici 🥺</p>
        </div>
      )}
    </>
  );
}

export default ProfileTweetsList;
