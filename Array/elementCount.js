const arr = [3, 5, 6, 7, 8, 7, 4, 3, 2, 5, 6, 7, 8, 8, 1, 7, 8, 7, 8];
function arrToObj(arr) {
  const res = {};
  for (ele of arr) {
    if (res[ele]) {
      res[ele] += 1;
    } else {
      res[ele] = 1;
    }
  }
  return res;
}
console.log(arrToObj(arr));
