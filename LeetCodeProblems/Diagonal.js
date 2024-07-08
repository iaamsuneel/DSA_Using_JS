function diagonalDifference(arr) {
	let leftDiagSum = 0;
	let rightDiagSum = 0;
	for (let i = 0; i < arr.length; i++) {
		/* console.log(
			"arr[i][i]",
			arr[i][i],
			i,
			arr[i].length - (i + 1),
			arr[i][arr[i].length - (i + 1)]
		); */
		leftDiagSum += arr[i][i];
		rightDiagSum += arr[i][arr[i].length - (i + 1)];
	}
	let sum = Math.abs(leftDiagSum - rightDiagSum);
	return sum;
}
console.log(
	diagonalDifference([
		[11, 2, 4],
		[4, 5, 6],
		[10, 8, -12],
	])
);
// Check if Matrix Is X-Matrix [[5,0,0,1],[0,4,1,5],[0,5,2,0],[4,1,0,2]]
var checkXMatrix = function (grid) {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (i === j || j === grid[i].length - (i + 1)) {
				if (grid[i][j] == 0) {
					return false;
				}
			} else {
				if (grid[i][j] !== 0) {
					return false;
				}
			}
		}
	}
	return true;
};
console.log(
	"checkXMatrix",
	checkXMatrix([
		[5, 7, 0],
		[0, 3, 1],
		[0, 5, 0],
	])
);
