// A Queue works on the FIFO(First in First Out) principle.
// method
/* enqueue : To add elements at the end of the queue.
dequeue: To remove an element from the front of the queue.
peek: To get the front element without removing it.
isEmpty: To check whether an element is present in the queue or not.
printQueue: To print the elements present in the queue. */
// Functions to be implemented
// enqueue(item)-- Done
// dequeue() ---> Done
// peek() -- Done
// isEmpty() -- Done
// printQueue()-- Done
class Queue {
  constructor() {
    this.myQueue = [];
  }
  enqueue(ele) {
    this.myQueue.push(ele);
  }
  dequeue() {
    if (this.myQueue.length === 0) return "Queue empty";
    return this.myQueue.shift();
  }
  peek() {
    if (this.myQueue.length === 0) return "Queue is empty";
    return this.myQueue[0];
  }
  isEmpty() {
    return this.myQueue.length === 0;
  }
  printQueue() {
    let str = " ";
    for (let i = 0; i < this.myQueue.length; i++) {
      str = str + this.myQueue[i] + "->";
    }
    return str;
  }
}
const queueList = new Queue();
queueList.enqueue(10);
queueList.enqueue(20);
queueList.enqueue(30);
queueList.enqueue(40);
console.log("Remove In Queue Or dequeue : ", queueList.dequeue());
console.log("Print The Queue List : ", queueList.printQueue());
console.log("check is Empty :", queueList.isEmpty());
console.log("Peek Element Queue :", queueList.peek());
