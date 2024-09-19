var smallestNumber = function (num) {
  let x = String(num).split("");
  if (num > 0) {
    x.sort((a, b) => a - b);
  } else {
    x.sort((a, b) => b - a);
  }
  if (num > 0) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== "0") {
        [x[0], x[i]] = [x[i], x[0]];
        break;
      }
    }
  }
  return num > 0 ? Number(x.join("")) : Number(x.join(""));
};

console.log(smallestNumber(310)); // Output: 103
console.log(smallestNumber(-7605)); // Output: -7605
