class Node {
    constructor(data) {
        // this.Node = value
        this.value = data;
        this.left = null
        this.right = null
    }
}
class binaryTree {
    constructor() {
        this.root = null
    }
    isTreeEmpty() {
        return this.root === null
    }
    // insert 
    insert() {

        this.root = new Node(1)
        this.root.left = new Node(2)
        this.root.right = new Node(3)
        this.root.right.left = new Node(4)
        this.root.right.right = new Node(5)
    }
    getNode() {
        return this.root
    }
    levelOrderTraversal(root) {
        // console.log("object", node);
        let queue = [root]
        let str = []
        console.log(queue);
        while (queue.length != 0) {
            let subArr = []
            const n = queue.length
            for (let i = 0; i < n; i++) {
                let node = queue.pop()
                console.log("pop", node)
                subArr.push(node.value)
                if (node.left) queue.unshift(node.left)
                if (node.right) queue.unshift(node.right)
            }
            str.push(subArr)
        }
        return str
    }
    inorderTraversal(node) {
        if (node === null) return []
        return [...this.inorderTraversal(node.left), node.value, ...this.inorderTraversal(node.right)]

    }
    preOrderTraversal(node) {
        if (node === null) return []
        return [node.value, ...this.preOrderTraversal(node.left), ...this.preOrderTraversal(node.right)]
    }
    postOrderTraversal(node) {
        if (node === null) return []
        return [...this.preOrderTraversal(node.left), ...this.preOrderTraversal(node.right), node.value]
    }
    countLeafNode(node) {
        if (node == null)
            return 0;
        if (node.left == null && node.right == null) { return 1; }
        else {
            return this.countLeafNode(node.left) + this.countLeafNode(node.right)
        }
    }
    maxDepath(root) {
        if (root === null) return 0
        return 1 + Math.max(this.maxDepath(root.left) + this.maxDepath(root.left))
    }
    minDepth(root) {
        if (root === null) return 0
        if (root.left === null && root.right === null) return 1
        if (root.left === null) return this.minDepth(root.right) + 1
        if (root.right == null) return this.minDepth(root.left) + 1;
        return 1 + Math.min(this.minDepth(root.left), this.minDepth(root.right))
    }
    zigZagTraversal(node) {
        if (!root) return [];
        let queue = [node];
        let levels = [];
        while (queue.length > 0) {
            let levelSize = queue.length;
            levels.push([]);
            for (let i = 0; i < levelSize; i++) {
                let curr = queue.shift();
                if (levels.length % 2 == 1) levels[levels.length - 1].push(curr.value);
                else levels[levels.length - 1].unshift(curr.value);

                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
        }

        return levels;
    }
}
let BT = new binaryTree()
BT.insert()
let root = BT.getNode()
//console.log("root111", root);
console.log(BT.isTreeEmpty());
console.log("Root of Tree :-", BT.getNode());
console.log("level order trversal!!!", BT.levelOrderTraversal(root));
console.log("inOrderTraversal: ", BT.inorderTraversal(root));
console.log("preOrderTraversal: ", BT.preOrderTraversal(root));
console.log("postOrderTraversal: ", BT.postOrderTraversal(root));
console.log("Count Leaf Node : ", BT.countLeafNode(root));
console.log("MaxDepathBinaryTree : ", BT.maxDepath(root));
console.log("MinDepathBinaryTree : ", BT.minDepth(root));
console.log("Zig-Zag Traversal Order :", BT.zigZagTraversal(root));