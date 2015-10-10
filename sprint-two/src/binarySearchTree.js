var BinarySearchTree = function(value) {

  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

BinarySearchTree.prototype.insert = function(val) {

  var makeTree = function(node) {
    if (val > node.value) {
      if (node.right === null) {
        node.right = BinarySearchTree(val);
      } else {
        makeTree(node.right);
      }
    } else {
      if (node.left === null) {
        node.left = BinarySearchTree(val);
      } else {
        makeTree(node.left);
      }
    }
  };

  makeTree(this);
}

BinarySearchTree.prototype.contains = function(target) {
  var result = false;

  var walkTree = function(node) {
    if (node != null) {
      if (node.value === target) {
        result = true;
      } else if (node.value < target) {
        walkTree(node.right);
      } else {
        walkTree(node.left);
      }
    }
  }

  walkTree(this);
  return result;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {

  var cbTree = function(node) {
    if (node != null) {
      cb(node.value);
      cbTree(node.left);
      cbTree(node.right);
    }
  }

  cbTree(this);
}

/*
 * Complexity: What is the time complexity of the above functions?
 All methods are O(log(n))
 */
