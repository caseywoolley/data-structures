var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// [  [[k,v], [k1,v1], [k2, v2]] , , ,[ [k, v ], [k, v] ] ,   ]

HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    var empty = [];
    this._storage.set(i, empty);

  }
  var foundIndex;
 var pairs = this._storage.get(i);
  for (var j = 0; j < pairs.length; j++) {
    if (pairs[j][0] === k) {
    	foundIndex = j;
    }
  }

  if (foundIndex !== undefined) {
  	pairs[foundIndex][1] = v;
  } else {
  	pairs.push([ k, v ]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);

  var pairs = this._storage.get(i);
  for (var i = 0; i < pairs.length; i++) {
    if (pairs[i][0] === k) {
      return pairs[i][1]
    }
  }
  return null;
};


HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
   var pairs = this._storage.get(i);
  for (var j = 0; j < pairs.length; j++) {
  	if(pairs[j][0]===k){
  		pairs[j].splice(j,1);
  	}
  };

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
