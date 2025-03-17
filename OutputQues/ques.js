const list = [
  { id: 1, name: "Suneel" },
  { id: 2, name: "Sushu" },
  { id: 3, name: "pooja" },
];
const res = list.filter((item) => [1, 3].includes(item.id));
const res1 = list
  .filter((item) => [1, 3].includes(item.id))
  .map((item) => item.name);

console.log(res, "res1--->", res1.join(","));
