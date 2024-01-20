import tweetsJson from "../data/initial-data.json";

class TweetServices {
  static tweets() {
    const tweets = tweetsJson.tweets;
    return tweets;
  }

  static getAuthorTweet(userId) {
    let rUser = false;

    const users = [
      {
        id: 1,
        displayName: "Twitter",
        userName: "twitter",
        avatar: "/images/profils/5lY42eHs_400x400.jpg",
        isCertified: true,
      },
      {
        id: 78,
        displayName: "The New York Times",
        userName: "nytimes",
        avatar: "/images/profils/gjkVMelR_400x400.png",
        isCertified: true,
      },
      {
        id: 567,
        displayName: "Le Monde",
        userName: "lemondefr",
        avatar: "/images/profils/LTpqSDMM_400x400.jpg",
        isCertified: true,
      },
      {
        id: 234,
        displayName: "CNN",
        userName: "CNN",
        avatar: "/images/profils/K9gaaM1g_400x400.jpg",
        isCertified: true,
      },
      {
        id: 345,
        displayName: "BBC News",
        userName: "BBCNews",
        avatar: "/images/profils/B_dAPT7w_400x400.jpg",
        isCertified: true,
      },
      {
        id: 90,
        displayName: "Reuters",
        userName: "Reuters",
        avatar: "images/profils/3VBu4_Sa_400x400.jpg",
        isCertified: true,
      },
      {
        id: 7364,
        displayName: "The Guardian",
        userName: "gardian",
        avatar: "/images/profils/K2qKoGla_400x400.png",
        isCertified: false,
      },
    ];

    users.map((user) => {
      if (user.id === userId) {
        rUser = user;
      }
    });

    return rUser;
  }

  /**
   *
   * @param {Array} data
   * @param {string} type
   * @param {string} key
   * @return new object sorted
   */
  static sortTweets(data, type, key) {
    if (type == "date") {
      data.sort((a, b) => {
        return new Date(b[key]) - new Date(a[key]);
      });
    } else {
      data.sort((a, b) => {
        return b[key] - a[key];
      });
    }
    return data;
  }
}

export default TweetServices;
