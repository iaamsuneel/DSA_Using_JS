const nestedArray = [1, 2, [3, 4, [5, 6, 7, [8, 9, 10], [11, 12, 13]]]];
// output - : [1,2,3,4,5,6,7,8,9,10,11,12,13]
function flattenArray(arr) {
  let res = [];
  for (key of arr) {
    if (Array.isArray(key)) {
      let val = flattenArray(key);
      res.push(...val);
    } else {
      res.push(key);
    }
  }
  return res;
}
console.log("flattenArray", flattenArray(nestedArray));
