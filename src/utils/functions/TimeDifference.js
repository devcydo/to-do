export function getDaysFromMinutes(totalMinutes) {
  const days = Math.floor(totalMinutes / 1440);

  return parseInt(days);
}

export function getHoursFromMinutes(totalMinutes) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

export function getDifferenceInMinutes(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60);
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}
