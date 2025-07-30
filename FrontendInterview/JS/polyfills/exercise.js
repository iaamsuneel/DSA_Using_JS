// Most Asked Polyfill
// 1. Array.map() Polyfill
Array.prototype.myMap = function (callback) {
  const arr = [];
  if (!Array.isArray(this)) throw new TypeError();
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      arr.push(callback(this[i], i, this));
    }
  }
  return arr;
};
// usage
const arr = [1, 2, 3, 4];
const result_map = arr.myMap((item) => {
  return item * item;
});
console.log("high order function : map -> ::  ", result_map);

// 2. Array.filter() Polyfill
Array.prototype.myFilter = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};
const result_filter = arr.myFilter((item) => item % 2 == 0);
console.log("high order function : filter -> ::  ", result_filter);

// 3. Array.Reduce() Polyfill
Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue !== undefined ? initialValue : this[0];
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};
const result_reduce = arr.myReduce((acc, num) => acc + num, 0);
console.log("high order function : reduce -> ::  ", result_reduce);

// 4. Function.Bind() Polyfill
Function.prototype.myBind = function (context, ...bindArgs) {
  const originalFn = this;
  return function (...callargs) {
    return originalFn.apply(context, [...bindArgs, ...callargs]);
  };
};
function details(city, profile) {
  return `My Name is ${this.name} from ${city}, ${profile}`;
}
const obj = { name: "suneel" };
const result_bind = details.myBind(obj, "Allahabad");
console.log(result_bind("Frontend Engineer"));
// 5. Object.assign() Polyfill
Object.myAssign = function (target, ...sources) {
  sources.forEach((item) => {
    for (let key in item) {
      target[key] = item[key];
    }
  });
  return target;
};
const result_object_assign = Object.myAssign(
  {},
  { name: "Suneel" },
  { role: "frontend Engineer" },
  {
    location: "noida",
  }
);
console.log("result_object_assign", result_object_assign);

// 6. Deep Clone (Object/Array)
function deepClone(obj) {}
const obj_new = { a: 1, b: { c: 2 } };
const result_deep_clone = deepClone(obj_new);
console.log("result_deep_clone:::", result_deep_clone);

// 7. Polyfill for Promise.all()
function myPromiseall(promise) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promise)) {
      return reject(new TypeError("Argument must be an array"));
    }
    const result = [];
    let completedCount = 0;
    if (promise.length == 0) {
      return resolve([]);
    }
    promise.forEach((promiseItem, index) => {
      Promise.resolve(promiseItem)
        .then((value) => {
          result[index] = value;
          completedCount++;
          if (completedCount === promise.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 100));

myPromiseall(p1, p2, p3)
  .then((res) => {
    console.log("Result :::", res);
  })
  .catch((error) => {
    console.log("error:::", error);
  });
