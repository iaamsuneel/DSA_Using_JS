// ["MinStack","push","push","push","getMin","pop","top","getMin"]
class Stack {
  constructor() {
    this.stackList = [];
  }
  push(item) {
    this.stackList.push(item);
  }
  pop() {
    this.stackList.pop();
  }
  top() {
    this.stackList[this.stackList.length - 1];
  }
  getMinStack() {
    return Math.min(...this.stackList);
  }
}

let list = new Stack();
list.push(3);
list.push(2);
list.push(4);
list.push(1);
list.pop();
list.getMinStack();
console.log(list.getMinStack())
list.push(1);
console.log("list Stack", list, list.getMinStack());
