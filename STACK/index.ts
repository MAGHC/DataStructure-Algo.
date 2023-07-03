// 후입 선출! linked-list 나 double -linked list를 배웠다면 별로 어렵지않다.

class StackNode {
  // 여기선 걍 string
  val: string;
  next: null | StackNode;
  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  length: number;
  head: StackNode | null;
  tail: StackNode | null;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: string) {
    const newNode = new StackNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;
      this.head = newNode;
      newNode.next = temp;
    }
    // length 의 증가는 공통임으로 밖으로 빼준다.
    this.length++;
    return this;
  }

  pop() {
    // 왜 head? 냐 상관없다 마지막에 들어간게 먼저빠지기만 하면됨 이런식으로 queue도 쉽게 구현가능
    const popped = this.head;
    if (!this.head) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.length === 2 && popped?.next) {
      this.head = popped.next;
      this.tail = popped.next;
    } else if (popped?.next) {
      this.head = popped.next;
    }

    this.length--;
    // popped를 내보낼때 중요한건 next의 연결을 끊어줘서 받은걸로 접근못하게하는것
    if (popped) {
      popped.next = null;
    }
    return popped;
  }
}
const stack = new Stack();

stack.push('1');
