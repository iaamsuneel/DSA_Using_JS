var validMountainArray = function (arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push([Math.max(...arr[i])]);
  }
  return res;
};
console.log(
  "validMountainArray",
  validMountainArray([
    [1, 2, 3, 4],
    [2, 1],
    [5, 6, 7, 9],
  ])
);
