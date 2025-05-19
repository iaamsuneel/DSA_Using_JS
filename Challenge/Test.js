const nextArray = (arr) => {
  const res = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      res.push(...nextArray(ele));
    } else {
      res.push(ele);
    }
  }
  return res;
};
console.log(nextArray([1, 2, [2, 3, [3, 4, [5, 9]]], 8]));
