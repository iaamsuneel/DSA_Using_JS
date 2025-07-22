const userData = {
  a: "value1",
  b: "value2",
  c: {
    a: "nestedValue1",
    b: "nestedValue2",
    d: {
      b: "deepNestedB",
      e: "deepValue",
    },
  },
  d: [
    {
      a: "arrayValue1",
      b: "arrayValue2",
    },
    {
      c: {
        b: "deepInArray",
        f: "finalValue",
      },
    },
  ],
};

function deepOmit(obj, list) {
  if (Array.isArray(obj)) {
    obj.map((item) => deepOmit(item, list));
  }
  if (obj !== null && typeof obj === "object") {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (!list.includes(key)) {
        acc[key] = deepOmit(value, list);
      }
      return acc;
    }, {});
  }
  return obj;
}
console.log(deepOmit(userData, ["b", "e"]));
