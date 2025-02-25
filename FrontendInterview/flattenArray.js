const nestedArray = [1, 2, [3, 4, [5, 6, 7, [8, 9, 10], [11, 12, 13]]]];
// output - : [1,2,3,4,5,6,7,8,9,10,11,12,13]
function flattenArray(arr) {
  let res = [];
 // console.log(arr);
  for (key of arr) {
    if (Array.isArray(key)) {
      let val = flattenArray(key);
      console.log("firstval", val);
      res.push(...val);
    } else {
        console.log('else',key);
      res.push(key);
    }
  }
  return res;
}
console.log("flattenArray", flattenArray(nestedArray));
