export default function daysBetween(date) {
  // Ensure both dates are Date objects
  date = new Date(date);
  let date2 = new Date();

  // Get the timestamp (milliseconds since epoch) for both dates
  const timeDifference = date.getTime() - date2.getTime();

  // Convert milliseconds to days and round down to the nearest whole day
  const differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return differenceInDays;
}
