
/*  Binary Search is a searching algorithm for searching an element in a sorted list or array. 
Binary Search is efficient than Linear Search algorithm and
 performs the search operation in logarithmic time complexity for sorted arrays or lists.
Binary Search performs the search operation by repeatedly dividing the search interval in half.
The idea is to begin with an interval covering the whole array.
If the value of the search key is less than the item in the middle of the interval,
    narrow the interval to the lower half.
 Otherwise narrow it to the upper half.
 Repeatedly check until the value is found or the interval is empty.
 
 Time Complexity:  O(Log N), where N is the number of elements in the array.
 */
function binarySearch(arr, key) {
    let startIndex = 0
    let endIndex = arr.length - 1
    let mid = (startIndex + endIndex) / 2
    while (startIndex <= endIndex) {
        if (arr[mid] == key) {
            console.log("mid", mid)
            return mid;
        }
        // go to right 
        if (key > arr[mid]) {
            startIndex = mid + 1
        }
        else {
            startIndex = mid - 1
        }
        mid = (startIndex + endIndex) / 2
    }
    console.log("end")
}
binarySearch([2, 4, 6, 7, 9, 11, 17, 19, 27], 27)