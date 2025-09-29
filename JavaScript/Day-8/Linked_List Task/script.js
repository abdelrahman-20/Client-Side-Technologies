class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) cur = cur.next;
      cur.next = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);

    if (!this.isEmpty()) node.next = this.head;

    this.head = node;
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.getSize()) {
      console.log("Invalid Index");
      return;
    }
    if (index === 0) this.prepend(value);
    else {
      let node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) prev = prev.next;

      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.getSize()) {
      console.log("Invalid Index");
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("Empty List !!");
      return null;
    } else if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let removedNode;
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      console.log("Value Not Found !!");
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("Empty List !!");
      return -1;
    } else {
      let i = 0;
      let cur = this.head;
      while (cur) {
        if (cur.value === value) return i;
        cur = cur.next;
        i++;
      }
      console.log("Value Not Found !!");
      return -1;
    }
  }

  reverse() {
    let prev = null;
    let cur = this.head;

    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The List is Empty !!");
      return;
    }
    let cur = this.head;
    let listValues = "";

    while (cur) {
      listValues += `${cur.value}\t`;
      cur = cur.next;
    }
    console.log(listValues);
  }
}

const linkedList = new LinkedList();
const itemList = document.getElementById("item-list");
const appendBtn = document.getElementById("append-btn");
const popBtn = document.getElementById("pop-btn");

linkedList.print();

function renderList() {
  itemList.innerHTML = "<ul></ul>";
  let current = linkedList.head;

  while (current) {
    const li = document.createElement("li");
    const nullPtr = document.createElement("li");
    const arrow = document.createElement("span");

    nullPtr.id = "null";
    nullPtr.textContent = "null";
    arrow.textContent = " ↓";

    li.textContent = current.value;
    li.appendChild(arrow);
    itemList.appendChild(li);
    if (current.next === null) itemList.appendChild(nullPtr);

    current = current.next;
  }
}

appendBtn.addEventListener("click", () => {
  const input = document.getElementById("list-input");
  const value = input.value.trim();

  if (value) {
    linkedList.append(value);
    renderList();
    input.value = "";
  }
});

popBtn.addEventListener("click", () => {
  if (!linkedList.isEmpty()) {
    linkedList.removeFrom(linkedList.getSize() - 1);
    itemList.removeChild(itemList.lastChild);
  }
  renderList();
});
