/*
Iterable groups

Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier
in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the
Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class Group {
  constructor() {
    this.values = [];
  }
  static from(data) {
    const arr = new Group();
    for (let key of data) {
      arr.add(key);
    }
    return arr;
  }

  has(num) {
    return this.values.includes(num);
  }

  add(num) {
    if (!this.has(num)) this.values.push(num);
  }

  delete(num) {
    this.values = this.values.filter(el => el !== num);
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  };
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.values.length) {
      return { done: true };
    } else {
      let result = {
        value: this.group.values[this.position],
        done: false
      };
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c