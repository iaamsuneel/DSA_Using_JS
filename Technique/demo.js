
const currentDate=new Date()
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
console.log(
  "currentDate",
  currentDate,
  "day",
  day,
  "month",
  month,
  "year",
  year
);
// Function to format the current year as a range (e.g., "2024-25")
const fyList=['2023-24']
  const formatYearRange = (year) => {
  const nextYearShort = (year + 1).toString().slice(-2);
  fyList=[nextYearShort,...fyList]
   // Get the last two digits of the next year
 // return `${year}-${nextYearShort}`; // Format as "2024-25"
 return fyList
};
/*
// Function to add the formatted year range to a list
export const addYearRangeToList = (years) => {
  const currentYear = getCurrentYear();
  const yearRange = formatYearRange(currentYear); // Format the current year as a range
  if (!years.includes(yearRange)) {
    // Optional: Check to prevent duplicates
    return [...years, yearRange];
  }
  return years;
};
console.log(getCurrentYear()) */
console.log(formatYearRange(year))