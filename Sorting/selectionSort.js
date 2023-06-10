function selection(arr) {
  function swap(i, minIndex) {
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  var i, j, temp, minIndex;
  for (i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(i, minIndex);
  }
  return arr;
}

console.log(selection([5, 2, 3, 1]));
