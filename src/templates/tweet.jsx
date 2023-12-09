import ActionIcons from "./icons/actionIcons";
import Badges from "./icons/badges";
import TweetImages from "./tweetImages";

function TweetLayout(props) {
    const tweet = props.tweet;
    return (
        <div className="tweet">
            <div className="tweet-avatar">
                <img src={tweet.tweetAvatar} alt=""/>
            </div>
            <div className="tweet-content">
                <div className="tweet-title">
                    <h3 className="tweet-title-author">
                        {tweet.autor}
                    </h3>
                    <span className="tweet-title-details">{tweet.isCertified && <Badges badge="certified" />}</span>
                    <span className="tweet-title-details">{tweet.autorDetails}</span>
                    <span className="tweet-title-details">·</span>
                    <span className="tweet-title-details">{tweet.lastTime}</span>
                </div>
                <div className="tweet-text">{tweet.text}</div>
                <TweetImages images={tweet.image}  />
                <div className="tweet-actions">
                    <span role="button" className="tweet-action action-hover action-hover-blue">
                        <ActionIcons icon="comment" />
                        {tweet.nbrs.comment}
                    </span>
                    <span role="button" className="tweet-action action-hover action-hover-green">
                        <ActionIcons icon="repost" />
                        {tweet.nbrs.repost}
                    </span>
                    <span role="button" className="tweet-action action-hover action-hover-red">
                        <ActionIcons icon="like" />
                        {tweet.nbrs.like}
                    </span>
                    <span role="button" className="tweet-action action-hover action-hover-blue">
                        <ActionIcons icon="view" />
                        {tweet.nbrs.view}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TweetLayout;