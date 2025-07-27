var rotate = function(nums, k) {
    //let arr = new Array(nums.length).fill(0);
    for(let i=0,j=k;i<nums.length;i++,j++){
        if(j>nums.length){
            j -= nums.length-1;
        };
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }
    console.log(nums);
};

console.log(rotate([1,2,3,],2));    // 2,3,1


// i=1, j=2+1=3  ; j>nums.length/2 ==> j = j-2 = 3-2-1 = 0