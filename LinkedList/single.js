class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);

    //length 0 이면 앞뒤
    // 그다음부터 tail 이되고 neXT 업데이트
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  pop() {
    if (list.length === 0) {
      return undefined;
    }
    if (list.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    let start = this.head;
    let prev;

    while (start.next) {
      prev = start;
      start = start.next;
    }
    //length 1 이면 둘다 풀고
    //아니면 마지막꺼를 지워버리고 그이전꺼를 tail로..?
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    const cur = this.head;
    this.head = this.head.next;
    this.length--;
    return this;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  get(idx) {
    //인덱스를 받는다
    //d음수 혹은 리스트의 길이보다 같거나 클겨웅 동작할수없음
    if (idx < 0 || idx >= this.length) return null;
    let count = 0;
    let res = this.head;
    while (count !== idx) {
      res = res.next;
      count++;
    }

    return res;
  }

  set(idx, val) {
    //get 을사용할수있다.
    let matchVal = this.get(idx);

    matchVal.val = val;

    return matchVal ? true : false;
  }

  insert(idx, val) {
    //idx 체크

    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) {
      this.push(val);
      return;
    }
    if (idx === 0) {
      this.unshift(val);
      return;
    }

    const newNode = new Node(val);
    const prev = this.get(idx - 1);

    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return this;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    const prev = this.get(idx - 1);
    prev.next = prev.next.next;
    this.length--;

    return this;
  }
  reverse() {
    let cur = this.head;
    this.head = this.tail;
    this.tail = cur;
    // 헤드와 테일변경
    let next;
    let prev = null;
    // 꼬리가 처음에 null 임으로 Null로 설정

    for (let i = 0; i < this.length; i++) {
      next = cur.next;
      // 다음거 미리 저장
      cur.next = prev;
      prev = cur;
      // 지금꺼가 이전꺼가되고
      cur = next;
      // 지금꺼는 저장했던 다음거로 넘어감
    }
  }
}

const list = new SinglyLinkedList();

console.log(list);
