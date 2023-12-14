class UsersServices {
  static currentUserID = 789;

  static usersData() {
    const users = [
      {
        id: 1,
        displayName: "Twitter",
        userName: "twitter",
        cover: "",
        avatar: "/images/profils/5lY42eHs_400x400.jpg",
        description: "what's happening?!",
        follows: 0,
        followers: "67,3M",
        isCertified: true,
        infosData: [
          {
            nom: "position",
            isLink: false,
            text: "everywhere",
          },
          {
            nom: "website",
            isLink: true,
            text: "about.x.com",
          },
          {
            nom: "joinDate",
            isLink: false,
            text: "A rejoint Twitter en février 2007",
          },
        ],
      },
      {
        id: 789,
        displayName: "Bertin Selendo",
        userName: "bertinselendo",
        cover: "/images/profils/cover.jpeg",
        avatar: "/images/profils/avatar.jpg",
        description: "Développeur web, photographe, vidéographe, infographe.",
        follows: 50,
        followers: 11,
        isCertified: true,
        infosData: [
          {
            nom: "position",
            isLink: false,
            text: "Kinshasa, RDC",
          },
          {
            nom: "website",
            isLink: true,
            text: "bertinselendo.com",
          },
          {
            nom: "birthday",
            isLink: false,
            text: "Naissance le 26 novembre",
          },
          {
            nom: "joinDate",
            isLink: false,
            text: "A rejoint Twitter en juillet 2014",
          },
        ],
      },
      {
        id: 78,
        displayName: "The New York Times",
        userName: "nytimes",
        cover: "/images/JfNvJ_9G.jpeg",
        avatar: "/images/profils/gjkVMelR_400x400.png",
        description: "News tips? Share them here: http://nyti.ms/2FVHq9v",
        follows: 876,
        followers: "55,1M",
        isCertified: true,
        infosData: [
          {
            nom: "position",
            isLink: false,
            text: "New York City",
          },
          {
            nom: "website",
            isLink: true,
            text: "nytimes.com",
          },
          {
            nom: "joinDate",
            isLink: false,
            text: "A rejoint Twitter en mars 2007",
          },
        ],
      },
      {
        id: 567,
        displayName: "Le Monde",
        userName: "lemondefr",
        cover: "",
        avatar: "/images/profils/LTpqSDMM_400x400.jpg",
        description: "L'actualité de référence par la rédaction du Monde",
        follows: 678,
        followers: "10,7M",
        isCertified: true,
        infosData: [
          {
            nom: "position",
            isLink: false,
            text: "Paris",
          },
          {
            nom: "website",
            isLink: true,
            text: "lemonde.fr",
          },
          {
            nom: "joinDate",
            isLink: false,
            text: "A rejoint Twitter en février 2009",
          },
        ],
      },
      {
        id: 234,
        displayName: "CNN",
        userName: "CNN",
        cover: "/images/profils/cover.jpeg",
        avatar: "/images/profils/K9gaaM1g_400x400.jpg",
        description: "Développeur web, photographe, vidéographe, infographe.",
        follows: 50,
        followers: 11,
        isCertified: true,
        infosData: [
          {
            nom: "position",
            isLink: false,
            text: "Paris",
          },
          {
            nom: "website",
            isLink: true,
            text: "lemonde.fr",
          },
          {
            nom: "joinDate",
            isLink: false,
            text: "A rejoint Twitter en février 2009",
          },
        ],
      },
      {
        id: 345,
        displayName: "BBC News",
        userName: "BBCNews",
        cover: "/images/profils/cover.jpeg",
        avatar: "/images/profils/B_dAPT7w_400x400.jpg",
        description:
          "News, features and analysis. For world news, follow @BBCWorld. Breaking news, follow @BBCBreaking. Latest sport news @BBCSport. Our Instagram: BBCNews",
        follows: 85,
        followers: "15,2M",
        isCertified: true,
        infosData: [
          {
            nom: "position",
            isLink: false,
            text: "London",
          },
          {
            nom: "website",
            isLink: true,
            text: "bbc.co.uk/news",
          },
          {
            nom: "joinDate",
            isLink: false,
            text: "A rejoint Twitter en février 2007",
          },
        ],
      },
      {
        id: 90,
        displayName: "Reuters",
        userName: "Reuters",
        cover: "/images/profils/cover.jpeg",
        avatar: "images/profils/3VBu4_Sa_400x400.jpg",
        description:
          "Top and breaking news, pictures and videos from Reuters. For more breaking business news, follow @ReutersBiz. Our new daily podcast is here: ",
        follows: 1238,
        followers: "25,7M",
        isCertified: true,
        infosData: [
          {
            nom: "position",
            isLink: false,
            text: "Around the world",
          },
          {
            nom: "website",
            isLink: true,
            text: "reuters.com",
          },
          {
            nom: "joinDate",
            isLink: false,
            text: "A rejoint Twitter en février 2007",
          },
        ],
      },
      {
        id: 7364,
        displayName: "The Guardian",
        userName: "gardian",
        cover: "/images/F_tMAhqXUAAsLOu.jpeg",
        avatar: "/images/profils/K2qKoGla_400x400.png",
        description:
          "The need for independent journalism has never been greater. Become a Guardian supporter: http://support.theguardian.com",
        follows: 1039,
        followers: "10,9M",
        isCertified: true,
        infosData: [
          {
            nom: "position",
            isLink: false,
            text: "London",
          },
          {
            nom: "website",
            isLink: true,
            text: "theguardian.com",
          },
          {
            nom: "joinDate",
            isLink: false,
            text: "A rejoint Twitter en février 2009",
          },
        ],
      },
    ];

    return users;
  }

  static getUserByID(userID) {
    const users = this.usersData();
    const user = users.find((user) => user.id == userID);
    return user;
  }

  static getUserByUserName(userName) {
    const users = this.usersData();
    const user = users.find((user) => user.userName == userName);
    return user;
  }

  static getUserDisplayName(userID) {
    const user = this.getUserByID(userID);
    const { displayName } = user || {};
    return displayName;
  }

  static getUserName(userID) {
    const user = this.getUserByID(userID);
    const { userName } = user || {};
    return userName;
  }

  static getUserCover(userID) {
    const user = this.getUserByID(userID);
    const { cover } = user || {};
    return cover;
  }

  static getUserAvatar(userID) {
    const user = this.getUserByID(userID);
    const { avatar } = user || {};
    return avatar;
  }

  static getUserDescription(userID) {
    const user = this.getUserByID(userID);
    const { description } = user || {};
    return description;
  }

  static getUserFollows(userID) {
    const user = this.getUserByID(userID);
    const { follows } = user || {};
    return follows;
  }

  static getUserFollowers(userID) {
    const user = this.getUserByID(userID);
    const { followers } = user || {};
    return followers;
  }

  static isUserCertified(userID) {
    const user = this.getUserByID(userID);
    const { isCertified } = user || {};
    return isCertified;
  }

  static getUserLikesNumber(userID) {
    const randomNum = Math.floor(Math.random() * 1000) + 1;
    return randomNum;
  }

  static getWhoToFollow() {
    const followers = [
      {
        id: 78,
        displayName: "The New York Times",
        userName: "@nytimes",
        avatar: "/images/profils/gjkVMelR_400x400.png",
      },
      {
        id: 567,
        displayName: "Le Monde",
        userName: "@lemondefr",
        avatar: "/images/profils/LTpqSDMM_400x400.jpg",
      },
      {
        id: 234,
        displayName: "CNN",
        userName: "@CNN",
        avatar: "/images/profils/K9gaaM1g_400x400.jpg",
      },
      {
        id: 345,
        displayName: "BBC News",
        userName: "@BBCNews",
        avatar: "/images/profils/B_dAPT7w_400x400.jpg",
      },
      {
        id: 90,
        displayName: "Reuters",
        userName: "@Reuters",
        avatar: "/images/profils/3VBu4_Sa_400x400.jpg",
      },
      {
        id: 7364,
        displayName: "The Guardian",
        userName: "@gardian",
        avatar: "/images/profils/K2qKoGla_400x400.png",
      },
    ];
    return followers;
  }
}

export default UsersServices;
