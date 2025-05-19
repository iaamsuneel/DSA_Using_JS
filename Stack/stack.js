class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length == 0) {
      return "already Empty";
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  printStack() {
    let str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}
const stackArray = new Stack();
stackArray.push(2);
stackArray.push(8);
stackArray.push(19);
stackArray.push(4);
stackArray.pop();
console.log("Stack Array :- ", stackArray.items);
console.log("stackArray.isEmpty :", stackArray.isEmpty());
console.log("stackArray.size :", stackArray.size());
console.log("stackArray.peek :", stackArray.peek());
console.log("stackArray.printStack :", stackArray.printStack());
