var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {

  //[{value: 5},{value: 6}, {2:2}}
  this.children.push(Tree(value))

};

treeMethods.contains = function(target) {

  var found = false;
  var walkTree = function(node) {
    if (node.value === target) {
      found = true;
    } else {
      _.each(node.children, function(item) {
        walkTree(item);
      });
    }
  }

  walkTree(this);
  return found;
};

// 
/*
 * Complexity: What is the time complexity of the above functions?
  addChild is O(1) and contains is O(n)
 */
