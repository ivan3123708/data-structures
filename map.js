/*
 *	Maps are data structures that store key-value pairs. In JavaScript,
 *	these are available to us as objects. Maps provide rapid lookup of stored
 *	items based on key values and are very common and useful data structures.
*/

class Map {
	constructor() {
  	this.collection = {};
	}

  add(key, value) {
    this.collection[key] = value;
  }

  remove(key) {
    delete this.collection[key];
  }

  get(key) {
    return this.collection[key];
  }

  has(key) {
    return !!this.collection[key];
  }

  values() {
    const values = [];

    for (var key in this.collection) {
      values.push(this.collection[key]);
    }

    return values;
  }

  size() {
    return Object.keys(this.collection).length;
  }

  clear() {
    this.collection = {};
  }
};

const map = new Map();

map.add('name', 'John');			// adds name: 'John'
map.add('age', 27);						// adds age: 27
map.add('city', 'Seattle');		// adds city: 'Seattle'

map.values();									// returns ['John', 27, 'Seattle']

map.size();										// returns 3