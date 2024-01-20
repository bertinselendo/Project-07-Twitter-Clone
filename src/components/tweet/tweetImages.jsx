function TweetImages(props) {
  const images = props.images;

  if (!images) {
    return;
  }

  return (
    <div>
      <img src={images} alt="" className="rounded-xl" />
    </div>
  );
}

export default TweetImages;
