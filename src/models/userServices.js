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
        displayName: "Rachel Motolona",
        userName: "@rachel",
        avatar: "/public/images/tweet-profile-photo.png",
      },
      {
        id: 234,
        displayName: "The New York Times",
        userName: "@nytimes",
        avatar: "/public/images/tweet-profile-photo.png",
      },
    ];
    return followers;
  }
}

export default UserServices;
