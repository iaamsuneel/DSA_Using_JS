function chalkProblem(k, arr) {
  let chalk = 0;
  let nK = k;
  while (chalk <= nK) {
    console.log("first");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= nK) {
        console.log("se");
        nK = nK - arr[i];
        console.log("nk", nK);
      } else {
        return i;
      }
    }
  }
}
console.log(chalkProblem(25, [3,4,1,2]));
