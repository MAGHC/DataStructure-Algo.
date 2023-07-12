class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    const prevTail = this.tail;
    prevTail.next = newNode;
    newNode.prev = prevTail;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    const temp = this.tail;

    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
      // 기존의것 = temp 의 prev 도 연결을끊어줘야된다 반환을 이걸로할거라서이걸로이전전체값에 접근가능하기때문
    }

    this.length--;
    return temp;
  }

  shift() {
    const temp = this.head;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  get(idx) {
    let res;

    if (idx === 0) return this.head;
    if (idx < 0 || idx >= this.length) return undefined;
    // 같아도안됨 array랑 동일 1부터시작이라서
    if (idx <= this.length / 2) {
      let cnt = 0;
      let cur = this.head;
      while (cnt !== idx) {
        cur = cur.next;
        cnt++;
      }
      return cur;
    } else {
      let cnt = this.length - 1;
      let cur = this.tail;
      while (cnt !== idx) {
        cur = cur.prev;
        cnt--;
      }
      return cur;
    }
  }

  set(idx, val) {
    const found = this.get(idx);

    if (found != null) {
      found.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    const found = this.get(idx - 1);
    const newNode = new Node(val);

    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      newNode.prev = found.prev;
      found.prev.next = newNode;
      newNode.next = found;
      found.prev = newNode;
      this.length++;
    }
  }

  remove(idx) {
    if (this.length === 0) return false;
    const found = this.get(idx);
    const beofre = found.prev;
    const next = found.next;

    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length) {
      return this.pop();
    }
    (beofre.next = found.next), (next.prev = beofre);
    found.beofre = null;
    found.next = null;
    return found;
  }
}

const cra = new DoubleyLinkedList();
