let person = {
  name: "John Doe",
  getName: function () {
    console.log(this.name);
  },
};
setTimeout(person.getName, 1000); // without bind  output :-undefined
setTimeout(person.getName.bind(person), 1000); // with bind output :- John Doe
