// 1. Maximum Sum of Subarray of Size k
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    // i=0 ws=1
    // i=1 ws=4
    // i=2 ws 6 mxws
    // i=3 ws 12-1=11
    // i=4 ws 11-3=8
    windowSum += arr[i];
    if (i >= k - 1) {
      // 2 >=3-1
      maxSum = Math.max(maxSum, windowSum); // 6 , 11 ,8
      windowSum -= arr[left];
      left++;
    }
  }
  return maxSum;
}
console.log("maxSumSubarray :: ", maxSumSubarray([1, 3, 2, 6, -1], 3));

// 2. Smallest Subarray with a Sum Greater Than k
function smallestSubarrayWithSum(arr, k) {
  let minLength = Infinity
  let windowSum = 0;
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    // i=0 ml=0 , ws=2
    // i=1 ml=0 , ws=3
    // i=2 ml=(2-0+1) ,ws=8
    // i=3 ml=(2-1+1) ws=6 X
    // i=4 ml =  ws=5  left=2   
    // i=5, ml=2 (5-2-1)   ws=7.
    windowSum += arr[i]; //
    while (windowSum >= k) {
      minLength = Math.min(minLength, i - left + 1);
      windowSum -= arr[left];
      left++;
    }
  }
  return minLength;
}
console.log(
  "smallestSubarrayWithSum :: ",
  smallestSubarrayWithSum([2, 1, 5, 2, 3, 2], 90)
);
