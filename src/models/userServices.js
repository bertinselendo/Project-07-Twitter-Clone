class UserServices {
  static getWhoToFollow() {
    const followers = [
      {
        id: 78,
        displayName: "The New York Times",
        userName: "@nytimes",
        avatar: "/public/images/tweet-profile-photo.png",
      },
      {
        id: 567,
        displayName: "Le Monde",
        userName: "@lemondefr",
        avatar: "/public/images/tweet-profile-photo.png",
      },
      {
        id: 234,
        displayName: "CNN",
        userName: "@CNN",
        avatar: "/public/images/tweet-profile-photo.png",
      },
      {
        id: 345,
        displayName: "BBC News",
        userName: "@BBCNews",
        avatar: "/public/images/tweet-profile-photo.png",
      },
      {
        id: 90,
        displayName: "Reuters",
        userName: "@Reuters",
        avatar: "/public/images/tweet-profile-photo.png",
      },
      {
        id: 7364,
        displayName: "The Guardian",
        userName: "@gardian",
        avatar: "/public/images/tweet-profile-photo.png",
      }
    ];
    return followers;
  }
}

export default UserServices;
