const obj = {
    name: "Sandeep",
    Roll: 18,
}
console.log("Obj:-", obj) // Obj:- { name: 'Sandeep', Roll: 18 }
obj.name = "SparxIT"
obj.address = "Delhi"
console.log("Obj:-", obj) // Obj:- { name: 'SparxIT', Roll: 18, address: 'Delhi' }
// JavaScript Demo: Object.freeze() ->
/* new properties cannot be added, 
existing properties cannot be removed */
Object.freeze(obj)
// try to add new Properties
obj.name = "Suneel"
obj.contact = 98676544
console.log("Obj:-", obj)