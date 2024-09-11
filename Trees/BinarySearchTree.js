class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}
class BSTree {
  constructor() {
    this.root = null;
  }
  getRoot() {
    return this.root;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      console.log("this.root in insert ", this.root);
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, node) {
    console.log("root ::::: -->", root, node);
    if (root.value > node.value) {
      if (root.left === null) {
        console.log("Left Root if", root, node);
        root.left = node;
      } else {
        console.log("Left Root else", root, node);
        return this.insertNode(root.left, node);
      }
    } else {
      if (root?.right === null) {
        console.log("Right Root if ", root, node);
        root.right = node;
      } else {
        console.log("Right Root else", root, node);
        return this.insertNode(root.right, node);
      }
    }
  }
  printLevelOrder() {
    const root = this.getRoot();
    if (root === null) return;

    const queue = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
      const node = queue.shift(); // Dequeue the next node
      process.stdout.write(node.value + " "); // Print the current node's value

      if (node.left !== null) queue.push(node.left); // Enqueue left child if it exists
      if (node.right !== null) queue.push(node.right); // Enqueue right child if it exists
    }
  }
}
const BST = new BSTree();

BST.insert(50);
BST.insert(30);
BST.insert(70);
BST.insert(20);
BST.insert(40);
BST.insert(60);
BST.insert(80);
console.log("Get Root BST:- ", BST.getRoot());
// Print the BST in level-order
console.log("Level-order traversal of BST:");
BST.printLevelOrder();
