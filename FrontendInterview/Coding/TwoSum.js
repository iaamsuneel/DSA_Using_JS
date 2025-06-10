// if sorted array
// two pointer technique only works when the input array is sorted
function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // []

// if array is not sorted then use hash map approach
// Hash Map Approach – O(n) Time, O(n) Space (Best in most cases)

function twoSumHashMap(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let val = target - arr[i];
    if (map.has(val)) return [map.get(val), i];
    map.set(arr[i], i);
  }
  return [];
}
console.log(twoSumHashMap([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSumHashMap([3, 2, 4], 6)); // [ 1, 2 ]
