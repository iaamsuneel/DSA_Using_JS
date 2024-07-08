var kSmallestPairs = function (nums1, nums2, k) {
	const newArr = [];
	for (let i = 0; i < nums1.length; i++) {
		for (let j = 0; j < nums2.length; j++) {
			newArr.push([nums1[i], nums2[j]]);
		}
	}

	return newArr.sort((a, b) => a[0] + a[1] - (b[0] + b[1])).splice(0, k);
};
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));
