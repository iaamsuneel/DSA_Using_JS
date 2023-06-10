function sumDigitSum(nums) {
  let totalSum = 0;
  let digitSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    totalSum += num;
    while (num > 0) {
      console.log(num);
      digitSum += num % 10;
      console.log("first", digitSum);
      num = parseInt(num / 10);
    }
  }
  return Math.abs(digitSum - totalSum);
}
console.log(sumDigitSum([1, 15, 6, 3]));
