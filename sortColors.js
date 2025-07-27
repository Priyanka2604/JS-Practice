var sortColors = function(nums) {
    let r=0, w=0, b = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){ r++;}
        else if(nums[i]===1){ w++; }
        else{ b++; }
    }

    for(let i=0;i<nums.length;i++){
        if(i<r){ nums[i] = 0; }
        else if(i>=r && i<(r+w)){ nums[i] = 1; }
        else{ nums[i] = 2; }
    }

    console.log(nums);
};

console.log(sortColors([2,0,2,1,1,0]));