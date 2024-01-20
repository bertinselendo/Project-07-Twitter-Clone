/**
 * Difference betreen post date and current time in real language
 * @param {date YYYY-MM-DD:HH:MIN} postDate
 * @return string
 */
function tweetTimeDifference(postDate) {
  const currentDate = new Date();
  const postDateTime = new Date(postDate);

  const timeDifference = currentDate - postDateTime;
  const minutesDifference = Math.floor(timeDifference / (60 * 1000));
  const hoursDifference = Math.floor(timeDifference / (60 * 60 * 1000));
  const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  if (minutesDifference == 0) {
    return `Maintenant`;
  } else if (minutesDifference < 60) {
    return `Il y a ${minutesDifference} minute${
      minutesDifference !== 1 ? "s" : ""
    }`;
  } else if (hoursDifference < 24) {
    return `Il y a ${hoursDifference} heure${hoursDifference !== 1 ? "s" : ""}`;
  } else if (daysDifference < 30) {
    return `Il y a ${daysDifference} jour${daysDifference !== 1 ? "s" : ""}`;
  } else {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return `${postDateTime.toLocaleDateString("fr-FR", options)}`;
  }
}

export default tweetTimeDifference;
