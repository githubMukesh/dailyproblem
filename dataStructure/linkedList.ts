class ListNode {
  data;
  next;
  constructor(data) {
      this.data = data
      this.next = null                
  }
}

class LinkedList {
  head;
  constructor(head = null) {
      this.head = head
  }

  size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}

clear() {
  this.head = null;
}
}