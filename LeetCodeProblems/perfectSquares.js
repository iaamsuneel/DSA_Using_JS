var findDifference = function (nums1, nums2) {
  const res = [];
  const nums22 = [];
  const nums11 = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) {
      if (!nums11.includes(nums1[i])) {
        nums11.push(nums1[i]);
      }
    }
  }
  res.push(nums11);
  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i])) {
      if (!nums22.includes(nums2[i])) {
        nums22.push(nums2[i]);
      }
    }
  }
  res.push(nums22);
  return res;
};
console.log("findDifference", findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
