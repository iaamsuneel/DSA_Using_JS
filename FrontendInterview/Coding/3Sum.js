// 1. Brute-force Approach || O(n3)
function threeSum(arr) {
  const res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let left = i + 1; left < arr.length - 1; left++) {
      for (let k = left + 1; k < arr.length; k++) {
        if (arr[i] + arr[left] + arr[k] == 0) {
          let sortArr = [arr[i], arr[left], arr[k]].sort((a, b) => a - b);
          let convertString = JSON.stringify(sortArr);
          if (!res.includes(convertString)) res.push(convertString);
        }
      }
    }
  }
  return res.map((item) => JSON.parse(item));
}
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]

// 2. Two Pointer  Approach || O(n2)

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

// 3. Two Pointer  Approach || O(n2)
function threeSumAnother(arr) {
  arr.sort((a, b) => a - b);
  const setArr = new Set();
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        setArr.add([arr[i], arr[left], arr[right]].join(","));
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return Array.from(setArr).map((item) => item.split(",").map((item) => +item));
}
console.log("threeSumAnother : ", threeSumAnother([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log("threeSumAnother : ", threeSumAnother([0, 0, 0])); // [0,0,0]
console.log("threeSumAnother : ", threeSumAnother([0, 1, 1])); // []
console.log("threeSumAnother : ", threeSumAnother([3, 0, -2, -1, 1, 2])); // [[-2,-1,3],[-2,0,2],[-1,0,1]]
