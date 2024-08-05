class Node {
	constructor(value) {
		this.value = value; // Value of the node
		this.next = null; // Pointer to the next node
	}
}
class SinglyLinkedList {
	constructor() {
		this.head = null; // First node of the list
		this.tail = null; // Last node of the list
		this.size = 0; // Size of the list
	}
	// Add a node to the end of the list
	push(value) {
		const newNode = new Node(value);
		//console.log("new Node-->", newNode);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.size++;
		return this;
	}
	// Remove the last node from the list
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
			//console.log("current", current, "newTail", "newTail");
		}
		this.tail = newTail;
		this.tail.next = null;
		this.size--;
		if (this.size === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	// Add a node to the beginning of the list
	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.size++;
		return this;
	}

	// Remove the first node from the list
	shift() {
		if (!this.head) return undefined;
		const current = this.head;
		this.head = this.head.next;
		this.size--;
		if (this.size === 0) {
			this.tail = null;
		}
		current.next = null;
		return current;
	}
	// Get a node by its index
	get(index) {
		if (index < 0 || index >= this.size) return undefined;
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current;
	}
	// set specific index
	set(index, val) {
		if (index < 0 || index >= this.size) return undefined;
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		if (current) {
			current.value = val;
			return true;
		} else {
			return false;
		}
	}
	insert(index, val) {
		let temp = this.get(index - 1);
		let newNode = new Node(val);
		newNode.next = temp.next;
		temp.next = newNode;
		this.size++;
	}
	remove(index) {
		if (index === 0) return this.shift();
		if (index === this.size - 1) return this.pop();
		if (index < 0 || index >= this.size - 1) return undefined;
		let beforeNode = this.get(index - 1);
		let temp = beforeNode.next;
		beforeNode.next = temp.next;
		temp.next = null;
		this.size--;
		return temp;
	}
	reverse() {
		let prev = null;
		let current = this.head;
		console.log("current", current, "prev", prev);
		while (current != null) {
			let nextNode = current.next;
			console.log("nextNode", nextNode);
			current.next = prev;
			prev = current;
			current = nextNode;
		}
		return prev;
	}
	// first middle element
	firstMiddleEle() {
		let slow = this.head;
		let fast = this.head;
		while (fast && fast.next) {
			slow = slow.next;
			fast = fast.next.next;
		}
		return slow.value;
	}
	// remove duplicates && sorted list
	removeDuplicates() {
		let current = this.head;
		while (current !== null && current.next !== null) {
			if (current.value === current.next.value) {
				current.next = current.next.next;
				this.size--;
			} else {
				current = current.next;
			}
		}
		return this.head;
	}
	// remove duplicates && un-sorted list
	removeUnsortedDuplicates() {
		let current = this.head;
		let prev = null;
		const uniqueValue = new Set();
		while (current !== null) {
			if (uniqueValue.has(current.value)) {
				prev.next = current.next;
			} else {
				uniqueValue.add(current.value);
				prev = current;
			}
			current = current.next;
		}
		return this.head;
	}
}
// Example usage
const list = new SinglyLinkedList();
list.push(10);
list.push(14);
list.push(15);
list.push(10);
list.push(14);
//list.pop();
//list.unshift(2);
//list.shift();
//list.get(57);
//list.set(2, 33);
//list.insert(3, 121);
console.log("Node List--->"); // Should output the node with value 14
console.log("List", list, list.removeUnsortedDuplicates()); // Should output undefined
