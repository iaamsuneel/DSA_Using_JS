function traillingZero(n) {
  let sum = 0;
  while (n / 5 > 0) {
    sum = sum + Math.floor(n / 5);
    n = n / 5;
  }
  return sum;
}
console.log("object", traillingZero(9));
