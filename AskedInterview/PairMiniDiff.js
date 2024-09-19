/* Example 1:
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]] */

/* Example 2:
Input: arr = [1,3,6,10,15]
Output: [[1,3]]

Example 3:
Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]] */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  const res = [];
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
      res.length = 0;
    }
    if (diff === minDiff) {
      res.push([arr[i - 1], arr[i]]);
    }
  }
  return res;
};
// Example usage:
console.log(minimumAbsDifference([4, 2, 1, 3])); // Output: [[1, 2], [2, 3], [3, 4]]
console.log(minimumAbsDifference([40, 11, 26, 27, -20])); // Output: [ [ 26, 27 ] ]
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])); // Output: [[-14, -10], [19, 23], [23, 27]]
