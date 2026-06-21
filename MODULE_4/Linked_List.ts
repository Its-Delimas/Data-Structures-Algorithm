class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  head: ListNode | null;
  constructor() {
    this.head = null;
  }

  append(value: number): void {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }
}
