function curringSum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}
function sum(a) {
  return function (b) {
    return a + b;
  };
}
const res = curringSum(1)(2)(4)();
console.log(res);
