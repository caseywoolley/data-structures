var Stack = function() {
    var someInstance = {};

    // Use an object with numeric keys to store values
    var storage = {};
    var count = 0;

    // Implement the methods below
    someInstance.push = function(value) {
        storage[count] = value;
        count++;
    };

    someInstance.pop = function() {
        if (count) {
            count--;
        }
        var returnVal = storage[count];
        delete storage[count];
        return returnVal;
    };

    someInstance.size = function() {
        return count;
    };

    return someInstance;
};
