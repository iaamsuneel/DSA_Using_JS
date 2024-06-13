var checkPerfectNumber = function (num) {
  let sum = 0,
    count = 0;
  let len = Math.floor(num / 2);
  console.log("len--.", len);
  for (let i = 0; i < len; i++) {
    if (num % i === 0) {
      count++;
      sum = sum + i;
      console.log(i);
    }
  }
  console.log("-->", sum);
  return num % sum === 0 && count >= 2 ? true : false;
};
console.log("--->", checkPerfectNumber(6));
