
class Node {
    constructor(data) {
        this.value = data
        this.right = null
        this.left = null
    }
}
class BSTree {
    constructor() {
        this.root = null
    }
    // get root
    getRoot() {
        return this.root
    }

    //insertion
    insert(val) {
        var newNode = new Node(val)
        // console.log(newNode)
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
                return this.insertNode(root.left, newNode)
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode
            }
            else {
                return this.insertNode(root.right, newNode)
            }

        }
    }
    // min Value in bst
    minValueBst(node) {
        if (node.left === null) return node.value
        return this.minValueBst(node.left)
    }
    // max value in bst
    maxValueBst(node) {
        if (node.right === null) return node.value
        return this.maxValueBst(node.right)
    }
    // preOrder Traversal
    preorderTraversal(root) {
        if (root === null) return []
        return [root.value, ...this.preorderTraversal(root.left), ...this.preorderTraversal(root.right)]
    }
    // post Order Traversal 
    posorderTraversal(root) {
        if (root === null) return []
        return [...this.posorderTraversal(root.left), ...this.posorderTraversal(root.right), root.value]
    }
    // inOrder Traversal 
    inorderTraversal(root) {
        if (root === null) return []
        return [...this.inorderTraversal(root.left), root.value, ...this.inorderTraversal(root.right)]
    }
    // Search
    searchKey(root, key) {
        if (root === null) return false
        if (root.value == key) return true
        if (root.value > key) {
            return this.searchKey(root.left, key)
        }
        else {
            return this.searchKey(root.right, key)
        }
    }
    // deletion
    deleteNode(root, key) {
        if (root === null) return root
        if (root.value === key) {
            // o child
            // 1 child
            // 2 child
        }
        else if (root.data > x) {
            return this.deleteNode(root.left, key)
        }
        else {
            return this.deleteNode(root.right, key)
        }
    }
}
let BST = new BSTree()
BST.insert(8)
BST.insert(12)
BST.insert(5)
BST.insert(4)
BST.insert(7)
BST.insert(11)
BST.insert(14)
BST.insert(6)
BST.insert(13)
var root = BST.getRoot()
console.log("Binary Search Tree Root:-", root)
console.log("Min Value in BST:-", BST.minValueBst(root))
console.log("max Value in BST:-", BST.maxValueBst(root))
console.log("PreOrder Traversal:-", BST.preorderTraversal(root))
console.log("Post Order Traversal:-", BST.posorderTraversal(root))
console.log("In Order Traversal :-", BST.inorderTraversal(root))
console.log("Search Key In BST Present or Not :-", BST.searchKey(root, 10))