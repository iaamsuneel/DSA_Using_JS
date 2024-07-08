function findConsecutive(arr) {
	let maxCounter = 0,
		currentCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 1) {
			currentCount++;
			maxCounter = Math.max(maxCounter, currentCount);
		} else {
			currentCount = 0;
		}
	}
	return maxCounter;
}
const arr = [1, 1, 9, 1, 9, 9, 19, 7, 1, 1, 1, 3, 2, 5, 1];
console.log("findConsecutive-->", findConsecutive(arr));
