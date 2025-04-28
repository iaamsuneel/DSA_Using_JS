const obj = { name: "Suneel", location: "Allahabad", mob: "12345" };
console.log(obj);
function removeKey(key, obj) {
  delete obj[key];
  obj['newLocation']='Noida'
  return obj;
}
console.log(obj);
console.log("Result :::: ", removeKey("mob", obj));
