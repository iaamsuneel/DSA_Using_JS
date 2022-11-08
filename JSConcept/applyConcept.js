const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log("Max Values in Array:-", Math.max.apply(null, [1, 2, 3, 4, 5]))
console.log(person.fullName.call(person1, "Oslo", "Norway"))