var threeConsecutiveOdds = function (arr) {
	let count = 0;
	for (let ele of arr) {
		if (ele % 2 !== 0 || ele === 1) {
			count++;
		} else if (count == 3) {
			return true;
		} else {
			count = 0;
		}
	}
	return count === 3;
};
//console.log(threeConsecutiveOdds([1, 1, 1]));
//console.log(threeConsecutiveOdds([2, 6, 4, 1]));
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 71, 23, 12])); // true
