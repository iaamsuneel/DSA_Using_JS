// Function to reverse elements in the given range
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
    start++;
    end--;
  }
}
// Function to perform Right Rotation using the Reversal Algorithm
function rightRotate(arr, k) {
  let n = arr.length;
  k = k % n; // Optimize to handle cases where k > n
  if (k === 0) return arr; // No rotation needed if k is 0 or multiple of n
  // Step 1: Reverse the entire array
  reverse(arr, 0, n - 1); // Example: [1,2,3,4,5] -> [5,4,3,2,1]
  // Step 2: Reverse the first 'k' elements
  reverse(arr, 0, k - 1); // Example: [5,4,3,2,1] -> [4,5,3,2,1]
  // Step 3: Reverse the remaining 'n-k' elements
  reverse(arr, k, n - 1); // Example: [4,5,3,2,1] -> [4,5,1,2,3]
  return arr;
}

// Function to perform Left Rotation using the Reversal Algorithm
function rotateLeft(arr, k) {
  let n = arr.length;
  k = k % n; // Optimize to handle cases where k > n
  if (k === 0) return arr; // No rotation needed if k is 0 or multiple of n

  // Step 1: Reverse the first 'k' elements
  reverse(arr, 0, k - 1); // Example: [1,2,3,4,5] -> [2,1,3,4,5]

  // Step 2: Reverse the remaining 'n-k' elements
  reverse(arr, k, n - 1); // Example: [2,1,3,4,5] -> [2,1,5,4,3]
  // Step 3: Reverse the entire array
  reverse(arr, 0, n - 1); // Example: [2,1,5,4,3] -> [3,4,5,1,2]

  return arr;
}

// Test Cases
let arr1 = [1, 2, 3, 4, 5];
console.log(rightRotate([...arr1], 2)); // Output: [4, 5, 1, 2, 3]

let arr2 = [1, 2, 3, 4, 5];
console.log(rotateLeft([...arr2], 2)); // Output: [3, 4, 5, 1, 2]
