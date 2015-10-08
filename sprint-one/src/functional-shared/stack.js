var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);

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


