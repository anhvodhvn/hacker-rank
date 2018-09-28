function NextId() {
    var _nextId = 1;
    return function() {
        _nextId++;
        return _nextId;
    }
}
var nextId = NextId()
function Person(value) {
    this.name = value;
    this.userId = nextId();
}

var user1 = new Person('Joe');
console.log(user1);

var user2 = new Person('John');
console.log(user2);

var user3 = new Person('Jack');
console.log(user3);