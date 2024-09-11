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
	reverse() {
		let current = this.head;
		let prev = null;
		let nextNode = null;
		while (current) {
			nextNode = current.next;
			current.next = prev;
			prev = current;
			current = nextNode;
			//console.log("\n", "  Step :---> ", count++, "\n");
		}
		return prev;
	}
	reverseBetween(left, right) {
		const dummy = new Node(6);
		dummy.next = this.head;
		let prev = dummy;
		console.log("prev", prev);
		for (let i = 0; i < left - 1; ++i) {
			prev = prev.next;
		}
		let current = prev.next;
		let nextNode = null;
		for (let i = 0; i < right - left + 1; i++) {
			const temp = current.next;
			current.next = nextNode;
			nextNode = current;
			current = temp;
		}
		prev.next.next = current;
		prev.next = nextNode;
		return dummy.next;
	}
}
const list = new SinglyLinkedList();
list.push(4);
list.push(7);
list.push(9);
list.push(23);
list.push(3);
console.log(" List :: ", list.printList());
console.log(" Reverse Linked List :: ", list.reverse(), " \n ");
console.log(" Reverse B/w Postion Linked List :: ", list.reverseBetween(2, 4));
