var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //to hold the old tail
    var oldTail = this.tail;
    this.tail = Node(value);

    if (oldTail != null) {
      oldTail.next = this.tail;
    }
    if (list.head === null) {
      this.head = this.tail
    }
  }


  list.removeHead = function() {
    var originalHead = this.head;
    delete this.head;
    this.head = originalHead.next;
    return originalHead.value
  };

  list.contains = function(target) {
    var currNode = this.head
    while (currNode !== null) {
      if (currNode.value === target) {

        return true
      }
      currNode = currNode.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
