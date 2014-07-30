
function rearrange(array) {
    // even position = positive, odd = negative
    var i = 0;
    var j = 1;
    while (true) {
        while (array[i] > 0) i += 2;
        while (array[j] < 0) j += 2;
        if (i < array.length && j < array.length) {
            var tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
        else break;
    }
}

var ary = [-2, 3, 4, 5, -1, -6, 7, 9, 1];
rearrange(ary);
console.log(ary);
