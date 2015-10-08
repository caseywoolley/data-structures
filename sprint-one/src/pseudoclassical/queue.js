var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 0;
  this.end = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.end - this.start;
}

Queue.prototype.enqueue = function(val) {
  this.storage[this.end] = val;
  this.end++
}

Queue.prototype.dequeue = function() {
  var result = this.storage[this.start]
  delete this.storage[this.start]
  if (this.start < this.end)

    this.start++
    return result;
}
