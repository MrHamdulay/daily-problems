// SOLUTION 1: inorder traversal into array then ensure array is sorted
// Time: 2N, Space: 2N
//////////////////////

function pushInorder(node, ary) {
    if (node.left == null && node.right == null) {
        ary.push(node.val);
        return;
    }
    if (node.left != null) pushInorder(node.left, ary);
    ary.push(node.val);
    if (node.right != null) pushInorder(node.right, ary);
}

function isInorder(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        if (ary[i] > ary[i+1]) return false;
    }
    return true;
}

// SOLUTION 2: recursive traversal
// Time: N, Space: N
////////////////////

function isBST(node, min, max) {
    if (node.left == null && node.right == null) return true;
    var balanced_left = false;
    var balanced_right = false;
    if (node.left != null && node.left.val <= node.val && node.left.val >= min) balanced_left = isBST(node.left, min, node.val);
    if (node.right != null && node.right.val >= node.val && node.right.val <= max) balanced_right = isBST(node.right, node.val, max);
    return balanced_left && balanced_right;
}


// TEST CASE

function Node(val, l, r) {
    this.val = val;
    this.left  = l || null;
    this.right = r || null;
}

var b = new Node(1);
var c = new Node(3);
var a = new Node(2, b, c);

// RUNNER

console.log('solution 1:');
var ary = []
pushInorder(a, ary);
console.log(isInorder(ary));

console.log('solution 2:');
console.log(isBST(a, Number.MIN_VALUE, Number.MAX_VALUE));


