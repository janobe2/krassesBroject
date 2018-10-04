
function UserService() {
    _NAME = 'USERSERVICE',

        _items = [],

        this.initialize = function(empty) {

            if (empty == true) {
                console.log('init empty');
                localStorage.removeItem(_NAME); // clear data
                _items = [];
                localStorage.setItem(_NAME, JSON.stringify(_items)); // init empty
            } else {
                _items = JSON.parse(localStorage.getItem(_NAME));

                if (_items == null) {
                    _items = [];
                }

                console.log('init');
                console.log(_items);
            }
        }

    this.getUsers = function() {
        return _items;
    }

    this.addUser = function(name, age) {
        _items.push({name: name, age: age});

        console.log('items added');
        console.log(_items);
        localStorage.setItem(_NAME, JSON.stringify(_items));
    }

    this.removeUser = function(name) {
        for(var i = _items.length - 1; i >= 0; i--) {
            if(_items[i].name === name) {
                _items.splice(i, 1);
            }
        }
        console.log('items removed');
        console.log(_items);
        localStorage.setItem(_NAME, JSON.stringify(_items));
    }
}
