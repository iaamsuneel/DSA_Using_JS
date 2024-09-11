let arr = [[1, 2], [3, 4], [5, 6, [7, 8], 9], [10, 11, 12], 9];
//approach -: 1
// every level
function customFlatten(arr) {
  const res = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      // console.log("...customFlatten(ele)", ele, ...customFlatten(ele), res);
      res.push(...customFlatten(ele));
    } else {
      // console.log("ele", ele, res);
      res.push(ele);
    }
  });
  return res;
}
// approach :- 2
function customFlatten1(arr) {
  const res = [];
  const stack = [...arr];
  while (stack.length > 0) {
    const ele = stack.pop();
    if (Array.isArray(ele)) {
      stack.push(...ele);
    } else {
      res.push(ele);
    }
  }
  return res.reverse();
}

// depth level
//approach :- 1
function customFlattenDepthL(arr, l) {
  const result = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele) && l > 0) {
      result.push(...customFlattenDepthL(ele, l - 1));
    } else {
      result.push(ele);
    }
  });
  return result;
}
const nestedArray = [1, [2, [3, [4, 5]], 6], 7];
console.log(customFlattenDepthL(nestedArray, 1));
// Output: [1, 2, [3, [4, 5]], 6, 7] (flattened by 1 level)
console.log(customFlattenDepthL(nestedArray, 2));
// Output: [1, 2, 3, [4, 5], 6, 7] (flattened by 2 levels)
console.log(customFlattenDepthL(nestedArray, Infinity));
// Output: [1, 2, 3, 4, 5, 6, 7] (fully flattened)
console.log("customFlatten-->", customFlatten(arr));
console.log("customFlatten 1-->", customFlatten1(arr));
