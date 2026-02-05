class Queue {
  constructor() {
    this.items = new Array(5);
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  size() {
    console.log(this.items.length);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }

    const removed = this.items[this.front];
    this.items[this.front] = undefined;
    this.front++;

    console.log("Removed: ", removed);
  }

  isEmpty() {
    return this.front === this.rear;
  }

  print() {
    console.log(this.items);
  }
}

// OUTPUT:::
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();

queue.dequeue();
queue.dequeue();

queue.enqueue(40);
queue.enqueue(50);

queue.enqueue(60)

queue.print();
queue.size();