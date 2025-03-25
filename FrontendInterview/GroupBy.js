// What is groupBy?
/*   The groupBy operation is used to group a collection of objects 
     based on a shared property or computed value. It creates a structure 
     where elements with the same key (e.g., age, category, type)
     are grouped together in arrays under that key. */

// Why is groupBy Useful?
/*    Organizes data for easier processing.
      Helps in categorization and data visualization.
      Commonly used in reports, charts, and analytics.
      Optimizes searching and filtering operations. */

const userList = [
  { name: "Avnish", age: "30", location: "Delhi" },
  { name: "Sagar", age: "29", location: "Ghaziabad" },
  { name: "Suneel", age: "26", location: "Allahabad" },
  { name: "Anju", age: "26", location: "Aligarh" },
  { name: "Akshay", age: "30", location: "Noida" },
  { name: "Sushant", age: "30", location: "Bihar" },
];

// Using built-in Object.groupBy (Available in ES2023)
function groupByAgeUsingBuiltInMethod(users) {
  return Object.groupBy(users, (user) => user.age);
}
//console.log("Using built-in method:", groupByAgeUsingBuiltInMethod(userList));

// Using a manual approach for broader compatibility
// 1. Using Reduce Method
function groupByAge(users) {
  return users.reduce((acc, user) => {
    (acc[user.age] ||= []).push(user); // short form
    // (acc[user.age] = acc[user.age] || []).push(user);
    return acc;
  }, {});
}
// Using for loop
function groupByAges(users) {
  const obj = {};
  for (let item of users) {
    if (!obj[item.age]) {
      obj[item.age] = [];
    }
    obj[item.age].push(item);
  }
  return obj;
}
console.log("Using manual grouping: Using Reduce :::", groupByAge(userList));
console.log("Using manual grouping: Using loop ::::", groupByAges(userList));
/*  output : {
  '26': [
    { name: 'Suneel', age: '26', location: 'Allahabad' },
    { name: 'Anju', age: '26', location: 'Aligarh' }
  ],
  '29': [ { name: 'Sagar', age: '29', location: 'Ghaziabad' } ],
  '30': [
    { name: 'Avnish', age: '30', location: 'Delhi' },
    { name: 'Akshay', age: '30', location: 'Noida' },
    { name: 'Sushant', age: '30', location: 'Bihar' }
  ]
} */
