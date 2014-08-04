var ary = [
    [0, 1, 0, 0, 3],
    [0, 3, 3, 0, 0],
    [0, 0, 0, 0, 2],
    [0, 0, 1, 0, 2],
    [0, 0, 0, 0, 0]
];

var positions_hash = {};
var groups = [];

function getAdjacentPositions(y, x, positions) {
    if (ary[y][x] == 0) return;

    positions.push({x: x, y: y});
    positions_hash[x + "," + y] = positions;

    for (var j = y - 1; j <= y + 1; j++) {
        if (j >= ary.length || j < 0) continue;
        for (var i = x - 1; i <= x + 1; i++) {
            if (i >= ary[0].length || i < 0) continue;
            if (typeof positions_hash[i + "," + j] == 'undefined') {
                getAdjacentPositions(j, i, positions);
            }
        }
    }
}

for (var y = 0; y < ary.length; y++) {
    for (var x = 0; x < ary[0].length; x++) {
        var val = ary[y][x];
        if (val != 0 && (typeof positions_hash[x + ',' + y] == 'undefined')) {
            var positions = [];
            getAdjacentPositions(y, x, positions);
            var group = [];
            for (var i = 0; i < positions.length; i++) {
                var p_y = positions[i].y;
                var p_x = positions[i].x;
                    group.push(ary[p_y][p_x]);
            }
            groups.push(group);
        }
    }
}

console.log(groups);
