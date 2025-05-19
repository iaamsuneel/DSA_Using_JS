const nestedObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: [3, 5],
      f: 4,
    },
  },
  g: 5,
};
// output - : { a: 1, b_c: 2, b_d_e_0: 3, b_d_e_1: 5, b_d_f: 4, g: 5 }
function flattenObject(obj, parentKey = "") {
  let result = {};
  for (let ele of Object.entries(obj)) {
    const [key, value] = ele;
    let newKey = parentKey ? `${parentKey}-${key}` : key;
    if (typeof value == "object" && value !== null) {
      // result = { ...result, ...flattenObject(value, newKey) };
      Object.assign(result, flattenObject(value, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}
console.log("flattenObject :- ", flattenObject(nestedObj));
