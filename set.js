/*
 *	Set is like an array, but it cannot contain duplicate values.
 *	The typical use for a Set is to simply check for the presence of an item.
*/

class Set {
	constructor() {
		this.collection = [];
	}

	// check if set already contains given item
	has(item) {
		return this.collection.indexOf(item) !== -1;
	}

	// returns collection
	values() {
		return this.collection;
	}

	// adds item only if it doesn't already exist in the collection
	add(item) {
		if (!this.has(item)) {
			this.collection.push(item);

			return true;
		}

		return false;
	}

	// removes item
	remove(item) {
		if (this.has(item)) {
			const index = this.collection.indexOf(item);
			this.collection.splice(index, 1);

			return true;
		}

		return false;
	}

	// returns the size of collection
	size() {
		return this.collection.length;
	}

	// returns new set with combined elements from setA and setB without duplicates
	union(set) {
    const unionSet = new Set();
    const setA = this.values();
    const setB = set.values();

    setA.forEach((item) => unionSet.add(item));
    setB.forEach((item) => unionSet.add(item));

    return unionSet;
  }

  // returns new set with elements common to setA and setB
  intersection(set) {
    const intersectionSet = new Set();
    const setA = this.values();

    setA.forEach((item) => {
      if (setB.has(item)) {
        intersectionSet.add(item);
      }
    });

    return intersectionSet;
  }

  // returns new set that contains all elements from setA that aren't in setB
  difference(set) {
  	const differenceSet = new Set();

  	this.values().forEach((item) => {
  		if (!set.has(item)) {
  			differenceSet.add(item);
  		}
  	});

  	return differenceSet;
  }

  // checks if the setA is fully contained within setB
  subset(set) {
  	this.values().forEach((item) => {
  		if (!set.has(item)) {
  			return false;
  		}

  		return true;
  	});
  }
}

const set1 = new Set();
const set2 = new Set();

set1.add('John');					// adds 'John'
set1.add('Mark');					// adds 'Mark'
set1.add('John');					// returns false because 'John' is a duplicate

set2.add('Mark');					// adds 'Mark'
set2.add('Rob');					// adds 'Rob'
set2.add('Mike');					// adds 'Mike'

set1.union(set2);					// returns new set with ['John', 'Mark', 'Rob', 'Mike']
set1.intersection(set2);	// returns new set with ['Mark']
set1.difference(set2);		// returns new set with ['John']