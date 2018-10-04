function ObjectService() {
    _NAME = 'ObjectService',
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

    this.getItems = function() {
        return _items;
    }

    this.addItem = function(id, name, notiz, longitude, latitude) {
        _items.push(
            {
                id: id,
                name: name,
                notiz: notiz,
                longitude: longitude,
                latitude: latitude
            });

        console.log('items added');
        console.log(_items);
        localStorage.setItem(_NAME, JSON.stringify(_items));
    }

    this.removeItem = function(id) {
        for(var i = _items.length - 1; i >= 0; i--) {
            if(_items[i].id === id) {
                _items.splice(i, 1);
            }
        }
        console.log('items removed');
        console.log(_items);
        localStorage.setItem(_NAME, JSON.stringify(_items));
    }

    this.getItem = function(id) {
        for(var i = _items.length - 1; i >= 0; i--) {
            if(_items[i].id === id) {
                return _items[i];
            }
        }
    }
}
