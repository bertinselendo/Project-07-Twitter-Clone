

function TweetImages(props) {

    const images = props.images;

    if ( !images ) {
        return
    }

    return (
        <div className="tweet-image">
            <img src={images} alt="" />
        </div>
    )

}

export default TweetImages;