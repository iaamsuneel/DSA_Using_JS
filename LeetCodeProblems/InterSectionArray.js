var intersect = function (nums1, nums2) {
	const obj = {};
	let result = [];
	for (let item of nums1) {
		obj[item] ? obj[item]++ : (obj[item] = 1);
	}
	for (let item of nums2) {
		if (obj[item] && obj[item] > 0) {
			result.push(item);
			obj[item]--;
		}
	}
	console.log(obj);
	return result;
};
console.log(intersect([1, 2, 2, 1], [2, 2, 3, 4, 2, 2]));
