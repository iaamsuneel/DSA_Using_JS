/* Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0 */
const nums = [2, 3, -2, 4];
const nums1 = [-2, 0, -1];
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let tempMax = maxProd;
    maxProd = Math.max(nums[i], maxProd * nums[i], minProd * nums[i]);
    minProd = Math.min(nums[i], tempMax * nums[i], minProd * nums[i]);
    result = Math.max(result, maxProd);
  }
  return result;
};
console.log(maxProduct(nums)); // 6;
console.log(maxProduct(nums1)); // 0;
