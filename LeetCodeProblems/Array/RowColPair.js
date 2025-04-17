function rcp(arr) {
  let n = arr.length;
  let count = 0;
  let row = new Array(n).fill(0);
  let col = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      row[i] += arr[i][j];
      col[j] += arr[i][j];
      if (row[i] == col[j]) {
        count = count + 1;
      }
    }
  }
  return count;
}
console.log(
  rcp([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ]) // row :  00 01 02 , 10 11 12, 20 21 22
  // colm : 00 10 20 , 10 11 21 , 02 12 22
);
console.log(
  rcp([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
);
