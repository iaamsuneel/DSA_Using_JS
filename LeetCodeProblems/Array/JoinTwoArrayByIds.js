function joinArrayId(arr1, arr2) {
  const map = new Map();
  arr1.forEach((obj) => map.set(obj.id, obj));
  console.log(map);
  arr2.forEach((obj) => map.set(obj.id, { ...map.get(obj.id), ...obj }));
  console.log(map);
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
}
const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
console.log(joinArrayId(arr1, arr2));
