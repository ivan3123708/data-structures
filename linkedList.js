/*
 *	Linked list is a linear collection of data elements, whose order is
 *	not given by their physical placement in memory. Instead, each element
 *	points to the next. It is a data structure consisting of a collection
 *	of nodes which together represent a sequence. In its most basic form,
 *	each node contains: data, and a reference (in other words, a link) to the
 *	next node in the sequence. This structure allows for efficient insertion
 *	or removal of elements from any position in the sequence during iteration.
*/

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		const newNode = new Node(data, this.head);
		this.head = newNode;
	}

	size() {
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		}

		let node = this.head;

		while (node) {
			if (!node.next) {
				return node;
			}

			node = node.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (this.head) {
			this.head = this.head.next;
		}
	}

	removeLast() {
		if (!this.head || !this.head.next) {
			return this.head = null;
		}

		let prevNode = this.head;
		let node = prevNode.next;

		while (node.next) {
			prevNode = node;
			node = node.next;
		}

		prevNode.next = null;
	}

	insertLast(data) {
		const lastNode = this.getLast();

		if (lastNode) {
			const newNode = new Node(data);
			lastNode.next = newNode;
		} else {
			this.insertFirst(data);
		}
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;

		while (node) {
			if (counter === index) {
				return node;
			}

			node = node.next;
			counter++;
		}

		return null;
	}

	removeAt(index) {
		if (!this.head) {
			return null;
		}

		const prevNode = this.getAt(index - 1);

		if (prevNode && prevNode.next) {
			prevNode.next = prevNode.next.next;
		} else {
			this.head = this.head.next;
		}
	}

	insertAt(data, index) {
		const prevNode = this.getAt(index - 1);

		if (!prevNode) {
			if (index > this.size()) {
				return this.insertLast(data);
			}

			return this.insertFirst(data);
		}

		const newNode = new Node(data, prevNode.next);

		prevNode.next = newNode;
	}
}