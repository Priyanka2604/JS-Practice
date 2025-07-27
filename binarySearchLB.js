var search = function(nums, target) {
    let i=0, j=nums.length-1;
    //let ind = bst(i,j,nums,target);
    let ans = nums.length;
    let ind = uperBound(i, j, nums, target, ans);
    //let ind = lowerBound(i, j, nums, target, ans);
    return ind;
};

var bst = function(i, j, nums, target) {
    let m = Math.floor((i+j)/2);
    if(nums[m]===target) return m;
    
    if(i>j) return -1;

    if(nums[m]<target){
        i = m+1;
        return bst(i,j, nums, target);
    }

    if(nums[m]>target){
        j = m-1;
        return bst(i,j, nums, target);
    }
}

var uperBound = function(i, j, nums, x, ans){
    let m = Math.floor((i+j)/2);
    if(i>j) return ans;
    if(nums[m]>x){
        ans = m;
        j = m-1;
        return uperBound(i, j, nums, x, ans);
    }
    else if(nums[m]<=x){
        i = m+1;
        return uperBound(i, j, nums, x, ans);
    }
}

var lowerBound = function(i, j, nums, x, ans){
    let m = Math.floor((i+j)/2);
    if(i>j) return ans;
    if(nums[m]>=x){
        ans = m;
        j = m-1;
        return lowerBound(i, j, nums, x, ans);
    }
    else if(nums[m]<x){
        i = m+1;
        return lowerBound(i, j, nums, x, ans);
    }
}

console.log(search([3,5,8,9,15,19], 9));