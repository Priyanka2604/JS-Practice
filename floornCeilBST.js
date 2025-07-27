/*
 Definition for a binary tree node. 
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/**
    * @param {TreeNode} root
    * @param {number} val
    * @return {TreeNode}
**/

var searchBST = function(root, val) {
    while(root && root.val!==val){
        root = root.val>val ? root.left : root.right;
    }

    return root;
};

var cei = function (root, val) {
    let cei = -1;
    while (root) {
        if(root.val>=val){
            cei = root.val;
            root = root.left;
            continue;
        }
        else if(root.val<val){
            root = root.right;
            continue;
        }
    }

    return cei;
};

var floorr =  function (root, val) {
    let floorr = -1;
    while (root) {
        if(root.val<=val){
            floorr = root.val;
            root = root.right;
            continue;
        }
        else if(root.val>val){
            root = root.left;
            continue;
        }
    }

    return floorr;
}

var main = function () {
    let root = new TreeNode(8);
    root.left = new TreeNode(4);
    root.right = new TreeNode(12);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(6);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(14);

    let floo = floorr(root, 11);
    let ceii = cei(root, 11);
    console.log([floo, ceii]);
};

main();