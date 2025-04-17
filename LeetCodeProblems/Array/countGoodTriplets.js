const countGoodTriplets = (arr, a, b, c) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length - 2; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          count++;
        }
      }
    }
  }
  return count;
};
 const arr = [3, 0, 1, 1, 9, 7],
  a = 7,
  b = 2,
  c = 3; // input  */
/* const arr = [1, 1, 2, 2, 3],
  a = 0,
  b = 0,
  c = 1; */
console.log(countGoodTriplets(arr, a, b, c));
