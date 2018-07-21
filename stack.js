/*
 *  Stack is a collection of elements that follow the LIFO
 *  (Last-In First-Out) principle. Elements added to a stack
 *  are pushed to the tail, or the end, of the stack, and the
 *  element that was last added to the stack get removed first from it.
*/

class Stack {
  constructor() {
    this.collection = [];
  }

  // prints the collection
  print() {
    return this.collection;
  };

  // pushes the item at the end of collection
  push(item) {
    this.collection.push(item);
  };

  // pops the last item in collection
  pop() {
    return this.collection.pop();
  };

  // returns the first item in collection
  peek(item) {
    return this.collection[0];
  };

  // checks if collection is empty
  isEmpty() {
    return this.collection.length === 0;
  };

  // clears everything from the collection
  clear() {
    this.collection = [];
  };
}

const stack = new Stack();

stack.push('A');
stack.push('B');
stack.push('C');

stack.pop();

stack.print();  // ['A', 'B']