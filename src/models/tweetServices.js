class TweetServices {
  static tweets() {
    const tweets = [
      {
        id: 0,
        autor: "CNN",
        isCertified: true,
        autorDetails: "@CNN",
        lastTime: "7m",
        tweetAvatar: "/public/images/tweet-profile-photo.png",
        text: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis",
        image: null,
        nbrs: {
            comment: 123,
            repost: 56,
            like: 678,
            view: 7890,
          }
      },
      {
        id: 1,
        autor: "The New York Times",
        isCertified: true,
        autorDetails: "@nytimes",
        lastTime: "2h",
        tweetAvatar: "/public/images/profile-photo.png",
        text: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis",
        image: "/public/images/tweet-image.png",
        nbrs: {
          comment: 123,
          repost: 56,
          like: 678,
          view: "56k",
        }
      },
      {
        id: 2,
        autor: "Twitter",
        isCertified: true,
        autorDetails: "@twitter",
        lastTime: "Oct 29",
        tweetAvatar: "/public/images/profile-photo.png",
        text: "BIG New lol jk still Twitter",
        image: null,
        nbrs: {
          comment: 123,
          repost: 56,
          like: 678,
          view: "67M",
        }
      },
      {
        id: 3,
        autor: "Twitter",
        isCertified: false,
        autorDetails: "@twitter. Oct 29",
        tweetAvatar: "/public/images/profile-photo.png",
        text: "hello literally everyone",
        image: null,
        nbrs: {
          comment: 123,
          repost: 56,
          like: 678,
          view: "34M",
        }
      }
    ];
    return tweets;
  }
}

export default TweetServices;
