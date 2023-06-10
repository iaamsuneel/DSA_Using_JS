var average = function (salary) {
  const minSalary = Math.min(...salary);
  const maxSalary = Math.max(...salary);
  //console.log(minSalary, maxSalary);
  let i = 0;
  while (i < salary.length) {
    if (salary[i] === minSalary || salary[i] === maxSalary) {
      salary.splice(i, 1);
    } else {
      ++i;
    }
  }
  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    sum += salary[i];
  }
  return sum / salary.length;
};
console.log(
  "Average Salary Excluding the Minimum and Maximum Salary = :",
  average([4000, 3000, 1000, 2000])
); // Answer 2500
