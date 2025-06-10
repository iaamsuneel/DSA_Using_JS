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
