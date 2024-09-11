// --------Insertion Sort Algorithm---------
/* Start from the second element (index 1) since the first element is trivially sorted.
Compare the current element (key) with the previous elements.
If the current element is smaller than the previous element,
 compare it with the elements before.
  Move the greater elements one position up to make space for the swapped element. */
// ------- Time Complexity --------
/* Best Case: O(n) – when the array is already sorted.
Average and Worst Case: O(n²) – when the array is sorted in reverse order. */
/* --------Space Complexity----------
O(1) – Insertion sort is an in-place sorting algorithm. */
function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(InsertionSort([9, 5, 1, 4, 3]));
