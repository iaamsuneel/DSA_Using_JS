var countDigitOne = function (n) {
  let countr = 0;
  for (let i = 1; i <= n; i++) {
    let str = i.toString();
    // console.log("object11",str, str.split("1").length - 1)
    countr += str.split("1").length - 1;
  }
  return countr;
};
console.log("object", countDigitOne(13));
