var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n; // Handle cases where k is greater than n
  console.log(k);
  // Reverse the entire array
  reverse(nums, 0, n - 1);
  // Reverse the first k elements
  reverse(nums, 0, k - 1);
  // Reverse the remaining elements
  reverse(nums, k, n - 1);
  return nums;
};

var reverse = function (arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
