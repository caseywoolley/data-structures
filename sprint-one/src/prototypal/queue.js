var Queue = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var obj = Object.create(queueMethods);
    obj.storage = {};
    obj.start = 0;
    obj.end = 0;
    return obj;
}

var queueMethods = {
    enqueue: function(val) {
        this.storage[this.end] = val;
        this.end++
    },
    dequeue: function() {
        var result = this.storage[this.start]
        delete this.storage[this.start]
        if (this.start < this.end)

            this.start++
            return result;
    },
    size: function() {
        return this.end - this.start;
    }

};
