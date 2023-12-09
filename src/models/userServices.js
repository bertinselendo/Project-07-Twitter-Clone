class UserServices {
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
      }
    ];
    return followers;
  }
}

export default UserServices;
