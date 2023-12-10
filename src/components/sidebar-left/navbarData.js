class NavbarItems {
  static getNavbarItems() {
    const navbarItems = [
      {
        icon: "twitter",
        text: false,
        link: "/",
        nbrs: false,
      },
      {
        icon: "home",
        text: "Home",
        link: "/",
        nbrs: false,
      },
      {
        icon: "explore",
        text: "Explore",
        link: "/explore",
        nbrs: false,
      },
      {
        icon: "notification",
        text: "Notifications",
        link: "/notifications",
        nbrs: 7,
      },
      {
        icon: "message",
        text: "Messages",
        link: "/messages",
        nbrs: 3,
      },
      {
        icon: "bookmark",
        text: "Bookmarks",
        link: "/bookmarks",
        nbrs: 89,
      },
      {
        icon: "list",
        text: "Lists",
        link: "/lists",
        nbrs: false,
      },
      {
        icon: "profil",
        text: "Profil",
        link: "/profile",
        nbrs: false,
      },
      {
        icon: "more",
        text: "More",
        link: "#",
        nbrs: false,
      },
    ];

    return navbarItems;
  }
}

export default NavbarItems;
