function fourDigit(num) {
  const arr = num.toString().split("").sort();
  return parseInt(arr[0] + arr[2]) + parseInt(arr[1] + arr[3]);
}
console.log("fourDigit", fourDigit(2932));
