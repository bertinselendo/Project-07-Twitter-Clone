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
                    <li className="tweet-action">
                        <ActionIcons icon="comment" />
                        {tweet.nbrs.comment}
                    </li>
                    <li className="tweet-action">
                        <ActionIcons icon="repost" />
                        {tweet.nbrs.repost}
                    </li>
                    <li className="tweet-action">
                        <ActionIcons icon="like" />
                        {tweet.nbrs.like}
                    </li>
                    <li className="tweet-action">
                        <ActionIcons icon="view" />
                        {tweet.nbrs.view}
                    </li>
                </div>
            </div>
        </div>
    )
}

export default TweetLayout;