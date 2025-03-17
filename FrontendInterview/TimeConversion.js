function AMtoPM(str) {
  let [hh, mm, ss] = str.slice(0, 8).split(":");
  let period = str.slice(-2);
  if (period === "PM" && hh !== "12") {
    hh = String(Number(hh) + 12);
  } else if (period === "AM" && hh === "12") {
    hh = "00";
  }
  return `${hh}:${mm}:${ss}`;
}
console.log(AMtoPM("07:05:45PM")); // "19:05:45"
console.log(AMtoPM("12:00:00PM")); // "12:00:00"
console.log(AMtoPM("12:00:00AM")); // "00:00:00"
console.log(AMtoPM("01:00:00AM")); // "01:00:00"
console.log(AMtoPM("11:59:59PM")); // "23:59:59"
