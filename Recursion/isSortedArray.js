function isSortedArray(arr, size) {
    //var size = arr.length;
    if (size === 0 || size === 1) return true;
    if (arr[size - 1] < arr[size - 2]) {
        return false;
    }
    else {
        //  console.log(size)
        let res = isSortedArray(arr, size - 1)
        return res
    }
    // using loop
    /*   arraySortedOrNot(arr, n) {
          // code here
          for (let i = 1; i < n; i++) {
              if (arr[i] < arr[i - 1]) {
                  return false;
              }
          }
          return true;
      } */
}
console.log(isSortedArray([2, 10, 6, 8, 9], 5))