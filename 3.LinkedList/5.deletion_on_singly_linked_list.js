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

  // Insert at the beginning - O(1)
  prepend(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  // 📌 Operation 2: DELETION
  // Delete from beginning - O(1)
  deleteFirst() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    const removedNode = this.head;
    this.head = this.head.next;
    this.size--;
    console.log("Removed Node: ", removedNode.data);
  }
}

let list = new SinglyLinkedList();
list.prepend(30);
list.prepend(20);
list.prepend(10);

list.deleteFirst();

list.print();
