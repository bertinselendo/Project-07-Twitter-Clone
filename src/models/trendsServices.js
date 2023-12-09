class TrendsServices {
  static getTrends() {
    const trends = [
      {
        id: 78,
        city: "France",
        htag: "#EIFFELTOWER",
        tweetNumber: 12000,
      },
      {
        id: 674,
        city: "Japan",
        htag: "#MTFUJI",
        tweetNumber: 45000,
      },
      {
        id: 980,
        city: "Italy",
        htag: "#COLISEUM",
        tweetNumber: 32000,
      },
      {
        id: 980,
        city: "Australia",
        htag: "#SYDNEYOPERAHOUSE",
        tweetNumber: 56000,
      },
      {
        id: 980,
        city: "Brazil",
        htag: "#CHRISTTHEREDEEMER",
        tweetNumber: 89000,
      },
    ];
    return trends;
  }
}

export default TrendsServices;
