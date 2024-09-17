function moveToZeroEnd(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      console.log("i,j", i, j);
      j++;
    }
  }
  return arr;
}
console.log(moveToZeroEnd([3, 0, 0, 5, 0, 6, 0, 9]));
