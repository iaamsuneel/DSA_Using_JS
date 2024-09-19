const maxSubarraySum = (arr) => {
  let currentSum = 0;
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    currentSum = arr[i] + currentSum;
   // console.log("i->currentSum->maxSum ", i, currentSum, maxSum);
    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};
// Example usage:
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
/* console.log(maxSubarraySum([1, 2, 3, 4])); // Output: 10
  console.log(maxSubarraySum([-1, -2, -3, -4])); // Output: -1 */
