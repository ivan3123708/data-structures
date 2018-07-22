/*
 *	Priority Queue is a special type of Queue in which items
 *	may have additional information which specifies their priority.
 *	This could be simply represented with an integer. Item priority will
 *	override placement order in determining the sequence items are dequeued.
 *	If an item with a higher priority is enqueued after items with lower
 *	priority, the higher priority item will be dequeued before all the others.
*/

class PriorityQueue {
	constructor() {
		this.collection = [];
	}

	print() {
		return this.collection;
	}

	enqueue(item) {
    let insertIndex = this.collection.length;

    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][1] > item[1]) {
        insertIndex = i;
        break;
      }
    }

    this.collection.splice(insertIndex, 0, item);

    return this.collection;
	}

	dequeue() {
		return this.collection.shift()[0];
	}
}

const q = new PriorityQueue();

q.enqueue(['yellow', 3]);		// adds ['yellow', 3] to index 0
q.enqueue(['white', 1]);		// adds ['white', 1] to index 0, pushing ['yellow', 3] back - higher priority
q.enqueue(['black', 7]);		// adds ['black', 7] to index 2 - lowest priority

q.print();									// [['white', 1], ['yellow', 3], ['black', 7]]

q.dequeue();								// removes and returns 'white'