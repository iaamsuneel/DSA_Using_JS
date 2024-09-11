// find index of target element
// Problem 1:
function searchElement(arr, key) {
  let starInd = 0,
    endInd = arr.length - 1;
  let midIndex = Math.floor(starInd + (endInd - starInd) / 2);
  while (starInd <= endInd) {
    if (arr[midIndex] === key) {
      return midIndex;
    } else if (key > arr[midIndex]) {
      starInd = midIndex + 1;
    } else {
      starInd = midIndex - 1;
    }
    midIndex = Math.floor(starInd + (endInd - starInd) / 2);
  }
  return -1;
}
console.time('searchElement')
console.log(searchElement([2, 4, 6, 7, 9, 11, 27], 11));
console.timeEnd('searchElement')
