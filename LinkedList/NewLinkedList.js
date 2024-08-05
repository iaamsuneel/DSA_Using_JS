class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	push(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.size++;
	}
	pop() {
		// if head is empty
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		// if only one node in list
		if (!current.next) {
			this.head = null;
			return current;
		}
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		newTail.next = null;
		this.size--;
		return newTail;
	}
	printList() {
		let current = this.head;
		const list = [];
		while (current) {
			list.push(current.value);
			current = current.next;
		}
		return list.join(" -> ");
	}
}
const list = new SinglyLinkedList();
list.push(4);
list.push(7);
list.push(9);
list.push(23);
console.log(
	" List :: ",
	list,
	" \n List :: ",
	list.printList(),
	"\n Pop List ::",
	list.pop(),
	"\n ",
	list,
	"\n ",
	list.printList()
);
