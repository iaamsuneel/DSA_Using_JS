function useThrottle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      const res = fn(...args);
      return res;
    }
  };
}
function add(a, b) {
  console.log(a + b);
  return a + b;
}
let throttleFn = useThrottle(add, 1000);
console.log("throttleFn::", throttleFn(3, 4));
