/* Kadane's Algorithm:
Initialization:
Set maxSum = -∞ (or the smallest possible integer value) to track the maximum sum found so far.
Set currentSum = 0 to track the sum of the current subarray.
Iterate Through the Array:
For each element in the array ARR[i]:
Update currentSum as the maximum of ARR[i] and currentSum + ARR[i].
 This step decides whether to start a new subarray at ARR[i] or continue adding to the existing subarray.
Update maxSum as the maximum of maxSum and currentSum.
 This tracks the maximum subarray sum found so far.
Result:
After iterating through the entire array, maxSum will contain the maximum subarray sum. */

/* ---------Time Complexity---------:

O(N) where N is the length of the array (as we only need one pass through the array).

------------Space Complexity-----------:

O(1) as only a few variables are used to store intermediate results. */

/* ------Pseudo-code------- */

/* function kadane(ARR):
    maxSum = -∞
    currentSum = 0
    for each element in ARR:
        currentSum = max(element, currentSum + element)
        maxSum = max(maxSum, currentSum)
    return maxSum
 */

// example 1 :-
/* const maxSubarraySum = function (ARR) {
  let currentSum = 0; // Stores the sum of the current subarray
  let maxSum = -Infinity; // Stores the maximum subarray sum found so far
  for (let i = 0; i < ARR.length; i++) {
    // Either start a new subarray at ARR[i] or continue with the current subarray
    currentSum = Math.max(ARR[i], currentSum + ARR[i]);
    // Update the max sum found so far
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}; */
const maxSubarraySum = (arr) => {
  let currentSum = 0;
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    currentSum = arr[i] + currentSum;
    console.log("i->currentSum->maxSum ", i, currentSum, maxSum);
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
