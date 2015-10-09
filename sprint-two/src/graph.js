// ###Graph Solution

// Instantiate a new graph
var Graph = function() {
  // var nodes = {};
  // var node;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //this.node = {node: node};
  //nodes[node] =
  this[node] = {
    "value": node,
    "edge": {}
  };

  //console.log(this);

  // penguins {edge: {puppies}} pupies {edge: penguins}	

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this[node].value === node;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node].value;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].edge[toNode] === this[toNode]
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edge[toNode] = this[toNode]
  this[toNode].edge[fromNode] = this[fromNode]
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode].edge[toNode]
  delete this[toNode].edge[fromNode]
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, function(item, key, collection) {
    cb(item.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */