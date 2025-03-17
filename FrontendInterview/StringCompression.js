// String Compression aaabbbccc => a3b3c3

function StringCompression(str) {
  let obj = {};
  let resStr = "";
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  for (let ele in obj) {
    console.log("ele", ele);
    resStr += ele + obj[ele];
  }
  return { obj, resStr };
}
//console.log(StringCompression("aaanzbbbccc"));

function rotate(arr, k) {
  let i = 0;
  j = arr.length - 1;
  while (i <= k) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    k--;
    i++;
    j--;
  }
  console.log(arr);
}
console.log("rotate", rotate([1, 2, 3, 4, 5, 6], 1));
// 6,1,2,3,4,5
