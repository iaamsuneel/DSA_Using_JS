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
    resStr += ele + obj[ele];
  }
  return { obj, resStr };
}
//console.log(StringCompression("aaanzbbbccc"));
