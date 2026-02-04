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
    this.head = null; // Start of the list
    this.size = 0; // Track number of nodes
  }

  // Check if list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size
  getSize() {
    return this.size;
  }
}

// Creating nodes manually (for understanding)
let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);

// Connecting them
node1.next = node2;
node2.next = node3;
// node3.next is already null (end of list)

//==========================================================================//

console.log(node1.data); // 10
console.log(node2.data); // 20
console.log(node3.data); // 30


console.log(node1);
// Node {
//   data: 10,
//   next: Node { data: 20, next: Node { data: 30, next: null } }
// }

console.log(node1.data); // 10
console.log(node1.next.data); // 20
console.log(node1.next.next.data); // 30
