var longestConsecutive = function (nums) {
	if (nums.length === 0) return 0;
	const uniqueNums = new Set(nums); // Removes duplicates
	let longestStreak = 0;
	for (let num of uniqueNums) {
		if (!uniqueNums.has(num - 1)) {
			let currentNum = num;
			let currentStreak = 1;
			while (uniqueNums.has(currentNum + 1)) {
				currentNum++;
				currentStreak++;
			}
			longestStreak = Math.max(longestStreak, currentStreak);
		}
	}
	return longestStreak;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
