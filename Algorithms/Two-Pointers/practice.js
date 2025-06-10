/* What is the Two Pointer Technique?
The two pointer technique involves using
 two indices (pointers) to traverse
 a data structure (usually arrays or linked lists) in a coordinated way,
often from:
 1.Both ends (left and right)
 2.The beginning (fast and slow)
 3.Arbitrary positions depending on the problem
 
 
Why Use Two Pointers?
 Benefits of Using Two Pointers
 1.Optimized Time Complexity
 2.Many brute-force problems are O(n^2), two pointers can reduce it to O(n).
 3.Efficient Space Usage
 4.Generally done in-place, so extra space is often O(1).
 5.Simplifies Logic
 For problems like removing duplicates, 
reversing, or finding pairs—two pointers make the code clean and intuitive.
 */

// Exp 1.  Check if String is a Palindrome
function isCheckPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log("isCheckPalindrome:: ", isCheckPalindrome("nayan"));
// Exp 2. Two Sum
function twoSum(arr, target) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === target) return [i, j];
    else if (sum < target) i++;
    else j--;
  }
}
console.log("Two Sum :: ", twoSum([3, 3], 6));
console.log("Two Sum :: ", twoSum([2, 7, 11, 15], 9));
// if not sorted array then used Use a hashmap
function twoSum1(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let isVal = target - arr[i];
    if (map.has(isVal)) {
      return [map.get(isVal), i];
    }
    map.set(arr[i], i);
  }
}
console.log("Two Sum Using Map:: ", twoSum1([3, 3], 6)); // [0, 1]
console.log("Two Sum Using Map :: ", twoSum1([2, 7, 11, 15], 9)); // [0, 1]
console.log("Two Sum Using Map :: ", twoSum1([3, 2, 4], 6)); // [1, 2]


const fourSum = (arr, target) => {
  const res = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;
      let left = j + 1;
      let right = arr.length - 1;
      while (left < right) {
        let sum = arr[i] + arr[j] + arr[left] + arr[right];
        if (sum === target) {
          res.push([arr[i], arr[j], arr[left], arr[right]]);
          while (left < right && arr[left] === arr[left + 1]) left++;
          while (left < right && arr[right] === arr[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) left++;
        else right--;
      }
    }
  }
  return res;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); //  [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2, 2, 2, 2, 2], 8)); //  [[2,2,2,2]]

function threeSumTwoPointer(arr) {
  arr.sort((a, b) => a - b); // Sort the array
  const res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue; // Skip duplicate elements for i
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        res.push([arr[i], arr[left], arr[right]]);
        // Skip duplicates for left and right
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}

console.log("threeSumTwoPointer : ", threeSumTwoPointer([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log("threeSumTwoPointer : ", threeSumTwoPointer([0, 0, 0])); // [0,0,0]
console.log("threeSumTwoPointer : ", threeSumTwoPointer([0, 1, 1])); // []
console.log("threeSumTwoPointer : ", threeSumTwoPointer([3, 0, -2, -1, 1, 2])); // [[-2,-1,3],[-2,0,2],[-1,0,1]]