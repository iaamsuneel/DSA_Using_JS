// Sliding Window Technique
// The sliding window technique is a powerful method
// for solving problems involving contiguous subarrays or substrings

/* When to Use 1.:
You are working with arrays or strings.
You need to solve problems involving subarrays or substrings, such as:
Finding the maximum/minimum sum, length, or product of a subarray.
Finding a unique or special pattern in a substring. */

/* When to Use  2. : Sliding Window
When the problem involves contiguous subarrays or substrings.
When you need to optimize brute force solutions for better time complexity. */

/* The sliding window technique is a common algorithmic approach 
used for solving various problems that involve processing or analyzing 
a sequential data structure, such as arrays, strings, or streams. */

// General Sliding Window Template:
/* function slidingWindowExample(str) {
  let left = 0;
  let result = 0;
  let window = new Map(); // or Set or Object depending on use-case
  for (let right = 0; right < str.length; right++) {
    let char = str[right];
    // Expand window
    // Update window state with str[right]
   // while ( window violates condition ) {
      // Shrink window from the left
      // Update window state by removing str[left]
     // left++;
    //}
    // Update result (e.g., max length, count, etc.)
   // result = Math.max(result, right - left + 1);
  //}
 // return result;
//} 

// Examples
// Ques 4: Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

//Brute force Approach
// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]
function maxSlidingWindow(nums, k) {
  const result = [];
  const n = nums.length;
  for (i = 0; i <= n - k; i++) {
    let max = nums[i];
    for (j = 1; j < k; j++) {
      if (nums[i + j] > max) {
        max = nums[i + j];
      }
    }
    result.push(max);
  }
  return result;
}
console.log(
  "maxSlidingWindow",
  maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
);
// Time Complexity - O(n*k) => O(n^2)
// Space Complexity - O(n)

// 1. Maximum Sum of Subarray of Size k
function maxSumSubarray(arr, k) {
  let maxSum = 0,
    windowSum = 0,
    start = 0;
  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[start];
      start++;
    }
  }
  return maxSum;
}
//console.log("maxSumSubarray :: ", maxSumSubarray([1, 3, 2, 6, -1], 3));
// 2. Smallest Subarray with a Sum Greater Than k
function smallestSubarrayWithSum(arr, k) {
  let minLength = Infinity,
    windowSum = 0,
    start = 0;
  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    while (windowSum >= k) {
      minLength = Math.min(minLength, i - start + 1);
      windowSum -= arr[start];
      start++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}
/* console.log(
  "smallestSubarrayWithSum :: ",
  smallestSubarrayWithSum([2, 1, 5, 2, 3, 2], 7)
); */
// 3. Longest Substring with K Distinct Characters
/* function longestSubstringWithKDistinct() {}
console.log(
  "longestSubstringWithKDistinct :: ",
  longestSubstringWithKDistinct("araaci", 2)
); */

// 4. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(str) {
  let maxLength = 0,
    charSet = new Set(),
    start = 0;
  for (let i = 0; i < str.length; i++) {
    while (charSet.has(str[i])) {
      charSet.delete(str[start]);
      start++;
    }
    charSet.add(str[i]);
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}
console.log("lengthOfLongestSubstring", lengthOfLongestSubstring("abcabcbb"));
const findMaxAverage = function (nums, k) {
  let max = 0,
    start = 0,
    maxWindowAve = 0;
  for (let i = 0; i < nums.length; i++) {
    maxWindowAve += nums[i];
    while (i - start + 1 === k) {
      max = Math.max(maxWindowAve / k, max);
      maxWindowAve -= nums[start];
      start++;
    }
  }
  return max;
};
console.log("findMaxAverage :: ", findMaxAverage([1, 12, -5, -6, 50, 3], 4));
