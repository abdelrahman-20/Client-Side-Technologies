// Linked List:

function Node(value) {
  this.value = value;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    let new_node = new Node(value);
    if (this.isEmpty()) {
      this.head = new_node;
    } else {
      new_node.next = this.head;
      this.head = new_node;
    }
    this.size++;
  }

  append(value) {
    let new_node = new Node(value);
    if (this.head === null) {
      this.head = new_node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new_node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log(`Invalid Size !!`);
      return;
    } else if (index === 0) {
      this.prepend(value);
    } else {
      let new_node = new Node(value);
      let current = this.head;
      let currentIdx = 0;

      while (current !== null && currentIdx < index - 1) {
        current = current.next;
        currentIdx++;
      }

      new_node.next = current.next;
      current.next = new_node;
      this.size++;
    }
  }

  remove(index) {
    let removed_node;
    if (index < 0 || index >= this.size) {
      console.log(`Invalid Index !!`);
      return null;
    } else if (index === 0) {
      removed_node = this.head;
      this.head = this.head.next;
      return removed_node.value;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      removed_node = prev.next;
      prev.next = removed_node.next;
      this.size--;

      return removed_node.value;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log(`List is Empty !!`);
    } else {
      let current = this.head;
      let elements = [];
      while (current !== null) {
        elements.push(current.value);
        current = current.next;
      }
      console.log(elements.join(" -> "));
    }
  }
}

const list = new LinkedList();

console.log(list.isEmpty());
console.log(list.getSize());

list.append(1);
list.append(2);
list.append(4);

list.prepend(0);

list.insert(3, 3);

list.print();
list.remove(2);
list.print();
