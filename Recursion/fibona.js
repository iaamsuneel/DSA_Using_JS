function fibona(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibona(n - 1) + fibona(n - 2);
}
console.log(fibona(7)); // 13
// using loop
function fibona1(n) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i <= n; i++) {
    // console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  console.log(n1);
}
fibona1(7);
