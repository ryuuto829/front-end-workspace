function printLinkedList(head) {

  while (head.next) {
      console.log(head.data);
      head.data = head.next.data;
      head.next = head.next.next;
  }
  console.log(head.data);
}