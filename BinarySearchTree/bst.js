class BSTree {
    constructor() {
        this.root = null
    }
    // insert 
    insert(val) {
        var newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode
            }
            else {
                this.insertNode(root.left, newNode)
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode
            }
            else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    // search
    searchNode(node, data) {
        if (node === null) {
            return null
        }
        else if (data > node.value) {
            return this.searchNode(node.right, data)

        }
        else if (data < node.value) {
            return this.searchNode(node.left, data)
        }
        else {
            return node
        }
    }
    getRootNode() {
        return this.root;
    }
    isEmptyTree() {
        return this.root === null
    }
    // find mibn values
    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if (node.left === null)
            return node.value;
        else
            return this.findMinNode(node.left);
    }
    findMaxNode(node) {
        if (node.right === null)
            return node.value;
        else
            return this.findMaxNode(node.right);
    }
    // Performs inorder,preOrder,postOrder  traversal of a tree
    inOrder(node) {
        if (node === null) return []
        return [...this.inOrder(node.left), node.value, ...this.inOrder(node.right)]
    }
    preOrder(node) {
        /*  if (node !== null) {
             console.log(node.value)
             this.preOrder(node.left)
             this.preOrder(node.right)
         } */
        // second Method
        if (node === null) return []
        return [node.value, ...this.preOrder(node.left), ...this.preOrder(node.right)]
    }
    postOrder(node) {
        if (node === null) return []
        return [...this.preOrder(node.left), ...this.postOrder(node.right), node.value]
    }
}
class Node {
    constructor(data) {
        this.value = data;
        this.left = null
        this.right = null
    }
}
const BST = new BSTree()
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
//console.log(bst.getRootNode())
console.log(BST.getRootNode())
const root = BST.getRootNode()
console.log("InOrder:-", BST.inOrder(root))
console.log("PreOrder:-", BST.preOrder(root))
console.log("PostOrder:-", BST.postOrder(root))
console.log("Root Tree:-", root)
console.log("Min Node Values :-", BST.findMinNode(root))
console.log("Mix Node Values :-", BST.findMaxNode(root))
console.log("Search Node", BST.searchNode(root, 10))
// check for tree empty or Not
console.log("check for tree empty or Not:-", BST.isEmptyTree())