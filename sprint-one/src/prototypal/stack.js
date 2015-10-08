var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  someInstance.storage = {};
  return someInstance;
};


var stackMethods = {
	push: function(val) {
		this.storage[this.counter] = val;
		this.counter ++;
	},

	pop: function() {
		if (this.counter > 0) {
			this.counter --;
		}
		var result = this.storage[this.counter];
		delete this.storage[this.counter];
		return result;
	},

	size: function() { 
		return this.counter 
	}
};


/* --- Wouldn't pass tests for some reason.
var Stack = function() {
  var someInstance = Object.create(Stack.prototype);
  someInstance.counter = 0;
  someInstance.storage = {};
  return someInstance;
};


Stack.prototype.push = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
}

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    this.counter--;
  }
  var result = this.storage[this.counter];
  delete this.storage[this.counter];
  return result;
}

Stack.prototype.size = function() {
  return this.counter
}
*/


