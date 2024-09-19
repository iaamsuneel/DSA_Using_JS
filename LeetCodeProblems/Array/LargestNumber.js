/* Example 1:
Input: nums = [10,2]
Output: "210"

Example 2:
Input: nums = [3,30,34,5,9]
Output: "9534330" */
const nums = [3, 30, 34, 5, 9];
var largestNumber = function (nums) {
  let strNums = nums.map((num) => num.toString());
  strNums.sort((a, b) => b + a - (a + b));
  let result = strNums.join("");
  return result[0] === "0" ? "0" : result;
};
//console.time("largestNumber");
console.log("largestNumber ::: ", largestNumber(nums));
//console.timeEnd("largestNumber");
