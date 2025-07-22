function useDebounce(fn, delay) {
  let timerid;
  return function (...args) {
    clearTimeout(timerid);
    timerid = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
function add(a, b) {
  console.log("delay The : ", a + b);
  return a + b;
}
let result = useDebounce(add, 1000);
console.log(result(3, 5));
