/*
 *  Like stacks, queues are a collection of elements. But unlike stacks,
 *  queues follow the FIFO (First-In First-Out) principle. Elements added
 *  to a queue are pushed to the tail, or the end, of the queue, and only
 *  the element at the front of the queue is allowed to be removed.
*/

class Queue {
  constructor() {
    this.collection = [];
  }
  
  // prints the collection
  print() {
    return this.collection;
  };

  // pushes the item at the end of collection
  enqueue(item) {
    this.collection.push(item);
  }

  // removes the first item from collection
  dequeue() {
    return this.collection.shift();
  }

  // returns the first item in collection
  front() {
    return this.collection[0];
  }

  // returns the size of collection
  size() {
    return this.collection.length;
  }

  // checks if collection is empty
  isEmpty() {
    return this.collection.length === 0;
  }
}

const queue = new Queue();

queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

queue.dequeue();

queue.print();  // ['B', 'C']