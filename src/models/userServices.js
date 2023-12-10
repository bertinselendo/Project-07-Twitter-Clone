class UserServices {
  static getUserMainData() {
    const userMainData = {
      id: 789,
      displayName: "Bertin Selendo",
      userName: "@bertinselendo",
      cover: "/images/profils/cover.jpeg",
      avatar: "/images/profils/avatar.jpg",
      description: "Développeur web, photographe, vidéographe, infographe.",
      follows: 50,
      followers: 11,
      isCertified: true,
    };

    return userMainData;
  }

  static getUserID() {
    const userID = this.getUserMainData().id;
    return userID;
  }

  static getUserDisplayName() {
    const displayName = this.getUserMainData().displayName;
    return displayName;
  }

  static getUserName() {
    const userName = this.getUserMainData().userName;
    return userName;
  }

  static getUserCover() {
    const userCover = this.getUserMainData().cover;
    return userCover;
  }

  static getUserAvatar() {
    const userAvatar = this.getUserMainData().avatar;
    return userAvatar;
  }

  static getUserDescription() {
    const userDescription = this.getUserMainData().description;
    return userDescription;
  }

  static getUserFollows() {
    const userFollows = this.getUserMainData().follows;
    return userFollows;
  }

  static getUserFollowers() {
    const userFollowers = this.getUserMainData().followers;
    return userFollowers;
  }

  static isCertified() {
    const isCertified = this.getUserMainData().isCertified;
    return isCertified;
  }

  static getUserInfosData() {
    const userInfosData = [
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
    ];

    return userInfosData;
  }

  static getUserPostsNumber() {
    const number = 21;

    return number;
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
        avatar: "images/profils/3VBu4_Sa_400x400.jpg",
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

export default UserServices;
