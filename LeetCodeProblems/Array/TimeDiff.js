/* test cases ["23:59","00:00"]
["00:00","23:59","00:00"]
["00:00","12:00"]
["23:30","00:10"]
["00:00","12:00","23:59"]
["02:45","11:15","18:30","23:55"] */
const arr = [
  "00:00",
  "12:34",
  "23:59",
  "03:21",
  "16:45",
  "07:30",
  "20:15",
  "22:22",
];
function convertH2M(time) {
  let [hours, minutes] = time.split(":");
  return +hours * 60 + +minutes;
}
function findMinDifference(timePoints) {
  const minutesArray = timePoints.map(convertH2M);
  minutesArray.sort((a, b) => a - b);
  //console.log('minutesArray:::',minutesArray)
  let minDifference = Infinity;
  for (let i = 1; i < minutesArray.length; i++) {
    const diff = minutesArray[i] - minutesArray[i - 1];
    minDifference = Math.min(minDifference, diff);
  }
  const midnightDiff =
    1440 - minutesArray[minutesArray.length - 1] + minutesArray[0];
  minDifference = Math.min(minDifference, midnightDiff);
  return minDifference;
}
const result = findMinDifference(arr);
console.log("result", result);
