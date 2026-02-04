// Node class for Singly Linked List
class Node {
  constructor(data) {
    this.data = data; // The actual value
    this.next = null; // Pointer to next node
  }
}

// Singly Linked List class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // UTILITY METHODS

  // Check if list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size
  getSize() {
    return this.size;
  }

  // Print the list
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let output = "";

    while (current) {
      output += current.data + " → ";
      current = current.next;
    }

    console.log(output + "null");
  }

  // 📌 Operation 1: INSERTION
  // Insert at the beginning - O(1)
  prepend(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head; // New node points to old head
      this.head = newNode; // Head now points to new node
    }

    this.size++;
  }

  // Insert at the end - O(n)
  append(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      // Traverse to the last node
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      // current is now the last node
      current.next = newNode;
    }

    this.size++;
  }

  // Insert at specific index - O(n)
  insertAt(data, index) {
    // Validate index
    if (index < 0 || index > this.size) {
      console.log("Invalid Index");
      return;
    }

    // If inserting at beginning
    if (index === 0) {
      this.prepend(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;

    // Traverse to the node BEFORE the insertion point
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    // Insert the new node
    newNode.next = current.next;
    current.next = newNode;

    this.size++;
  }
}

// OUTPUT:::
let list = new SinglyLinkedList();

list.prepend(30);
list.prepend(20);
list.prepend(10);

list.append(40);
list.append(50);

list.insertAt(35, 3);

list.print(); // 10 → 20 → 30 → 35 → 40 → 50 → null
