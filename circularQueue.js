/*
 *  A circular queue is a queue that writes to the end of a collection
 *  and then begins over-writing itself at the beginning of the collection.
 *  This is type of data structure has some useful applications in certain
 *  situations. For example, a circular queue can be used for streaming media.
 *  Once the queue is full, new media data simply begins to overwrite old data.  
*/

class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
    this.queue.push(null);
    size--;
    }
  }

  print() {
   return this.queue;
  }

  enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write] = item;
      this.write + 1 <= this.max ? this.write++ : this.write = 0;

      return item;
    } else {
      return null;
    }
  }

  dequeue() {
    if (this.queue[this.read] !== null) {
      let temp = this.queue[this.read];
      this.queue[this.read] = null;
      this.read + 1 <= this.max ? this.read++ : this.read = 0;

      return temp;
    } else {
      return null;
    }
  }
}

const test = new CircularQueue(3);

test.enqueue('A');  // push 'A'
test.enqueue('B');  // push 'B'
test.enqueue('C');  // push 'C'
test.enqueue('D');  // return null because max size of the queue is 3

test.dequeue();     // removes 'A'
test.dequeue();     // removes 'B'
test.dequeue();     // removes 'C'

test.enqueue('E');  // pushes 'E'
test.enqueue('F');  // pushes 'F'

test.dequeue();     // removes 'E'

test.print();       // [null, 'F', null]