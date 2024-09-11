/* ------- Algorithm -------
1. Loop from i = 0 to n-1 (for passes):
2. For each i, loop from j = 0 to n-i-1 (to compare and swap adjacent elements).
3. If arr[j] > arr[j + 1], swap arr[j] and arr[j + 1].
 */
/* ------ Time Complexity -------
Worst Case: O(n²) when the array is in reverse order.
Average Case: O(n²) */
/* Best Case: O(n) when the array is already sorted 
------- Space Complexity --------
O(1): Bubble sort is an in-place sorting algorithm 
that requires no additional space apart from the input array */
const arr = [24, 18, 38, 43, 14, 40, 1, 54];
// Approach : 1
function bubbleSort(arr) {
  let n = arr.length;
  function swap(arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
// output => [1, 14, 18, 24,38, 40, 43, 54 ]
// Approach : 2
function bubbleSorting(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
const result = bubbleSorting(arr);
console.log("result----->", result); // output => [1, 14, 18, 24,38, 40, 43, 54 ]
