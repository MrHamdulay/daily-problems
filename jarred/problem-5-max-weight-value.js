var limit = 10;

var items = [{v: 0, w: 1}, {v: 2, w: 2}, {v: 3, w: 3}, {v: 4, w: 4}, {v: 5, w: 5}];
var collection = function(items, weight, value) {
    (items) ? this.items = items.slice() : this.items = [];
    this.weight = weight || 0;
    this.value = value || 0;
};

function permute(c, index) {
    if (c.weight + items[index].w > limit) return c;
    c.items.push(index); c.weight += items[index].w; c.value += items[index].v;
    var coll, coll_largest;
    for (var i = 0; i < items.length; i++) {
        coll = permute(new collection(c.items, c.weight, c.value), i);
        if (typeof coll_largest == 'undefined' || coll.value > coll_largest.value) {
            coll_largest = coll;
        }
    }
    return coll_largest;
}

console.log(permute(new collection(), 0));
