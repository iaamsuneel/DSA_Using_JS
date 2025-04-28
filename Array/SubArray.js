// find sub Array
// formula n*(n+1)/2
// A subarray is a contiguous part of array,
//i.e. Subarray is an array that is inside another array.

/*  Subarray = n*(n+1)/2
Subseqeunce = (2^n) -1 (non-empty subsequences)
Subset = 2^n */

function sum(arr) {
  let currentSum = 0;
  arr.forEach((element) => {
    currentSum += element;
  });
  return currentSum;
}
function subArray(arr) {
  const subarrays = [];
  let oldSum = 0;
  //let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      /* console.log(arr[j], j, i); */
      let list = arr.slice(i, j + 1);
      currentSum = sum(list);
      subarrays.push(list);
    }
    if (oldSum < currentSum) {
      oldSum = currentSum;
    }
    //totalSum += currentSum;
  }
  console.log("Total sum of all subarray elements:", oldSum);
  return subarrays;
}
console.log("Subarrays:", subArray([2, 1, 3]));
// What is a Subsequence?
