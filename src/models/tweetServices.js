class TweetServices {
  static tweets() {
    const tweets = [
      {
        id: 0,
        authorID: 234,
        lastTime: "7m",
        text: `President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis`,
        image: null,
        nbrs: {
          comment: 123,
          repost: 56,
          like: 678,
          view: 7890,
        },
      },
      {
        id: 1,
        authorID: 78,
        lastTime: "2h",
        text: `\"I knew my marriage was over. I knew I would need to use my half of the savings to hire a lawyer. And I vowed — a loaded verb choice, I know, given the context — never to be financially dependent on a man again,\" Maggie Smith writes in Modern Love.`,
        image: "/images/7vYg19C9.jpeg",
        nbrs: {
          comment: 31,
          repost: 9,
          like: 113,
          view: "75k",
        },
      },
      {
        id: 2,
        authorID: 1,
        lastTime: "1 août",
        text: `Free expression is fundamental to a healthy functioning global society - and if it's taken away, it's almost impossible to get back. That's why we will continue to stand up for people's rights, including the over half a billion of you who turn to our platform continually.`,
        image: null,
        nbrs: {
          comment: 123,
          repost: 56,
          like: 678,
          view: "67M",
        },
      },
      {
        id: 67839,
        authorID: 567,
        lastTime: "2h",
        text: `En direct, guerre Israël-Hamas : les Etats-Unis mettent leur veto à une résolution du Conseil de sécurité des Nations unies appelant à un cessez-le-feu à Gaza`,
        image: "/images/JfNvJ_9G.jpeg",
        nbrs: {
          comment: 123,
          repost: 56,
          like: 678,
          view: "3M",
        },
      },
      {
        id: 7984,
        authorID: 7364,
        lastTime: "2h",
        text: `Missed out on a bargain last Friday? Don't make the same mistake twice. <br>Get up to 25% off a home delivery subscription to the Guardian and Observer today, for a limited time. Last chance: http://theguardian.com/autumn23-tw`,
        image: "/images/F_tMAhqXUAAsLOu.jpeg",
        nbrs: {
          comment: 12,
          repost: 3,
          like: 7,
          view: "37k",
        },
      },
      {
        id: 7984,
        authorID: 7364,
        lastTime: "2h",
        text: `Ryan O’Neal has died at 82. <br><br><a href="http://theguardian.com/autumn23-tw" target="_blank">http://theguardian.com/autumn23-tw</a>`,
        image: false,
        nbrs: {
          comment: 12,
          repost: 3,
          like: 7,
          view: "37k",
        },
      },
    ];
    return tweets;
  }

  static getAuthorTweet(userId) {

    let rUser = false;

    const users = [
      {
        id: 1,
        displayName: "Twitter",
        userName: "@twitter",
        avatar: "/images/profils/5lY42eHs_400x400.jpg",
        isCertified: true,
      },
      {
        id: 78,
        displayName: "The New York Times",
        userName: "@nytimes",
        avatar: "/images/profils/gjkVMelR_400x400.png",
        isCertified: true,
      },
      {
        id: 567,
        displayName: "Le Monde",
        userName: "@lemondefr",
        avatar: "/images/profils/LTpqSDMM_400x400.jpg",
        isCertified: true,
      },
      {
        id: 234,
        displayName: "CNN",
        userName: "@CNN",
        avatar: "/images/profils/K9gaaM1g_400x400.jpg",
        isCertified: true,
      },
      {
        id: 345,
        displayName: "BBC News",
        userName: "@BBCNews",
        avatar: "/images/profils/B_dAPT7w_400x400.jpg",
        isCertified: true,
      },
      {
        id: 90,
        displayName: "Reuters",
        userName: "@Reuters",
        avatar: "images/profils/3VBu4_Sa_400x400.jpg",
        isCertified: true,
      },
      {
        id: 7364,
        displayName: "The Guardian",
        userName: "@gardian",
        avatar: "/images/profils/K2qKoGla_400x400.png",
        isCertified: false,
      }
    ];

    users.map((user) => {
      if ( user.id === userId ) {
        rUser =  user;
      }
    })

    return rUser;

  }
}

export default TweetServices;