var summaryRanges = function (nums) {
  const arr = [];
  let cntSeq = [];
  for (let i = 0; i < nums.length; i++) {
    if (cntSeq.length === 0) {
      cntSeq.push(nums[i]);
    }
    if (nums[i + 1] !== nums[i] + 1) {
      if (cntSeq.length === 1) {
        arr.push(cntSeq[0].toString());
      } else {
        arr.push(`${cntSeq[0]}->${nums[i]}`);
      }
      cntSeq = [];
    } else {
      cntSeq.push(nums[i]);
    }
  }

  return arr;
};

const nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums)); // Output: [ '0->2', '4->5', '7' ]

/* Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7" */
