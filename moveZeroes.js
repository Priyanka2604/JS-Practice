// var moveZeroes = function(nums) {
//     let n = nums.length, c = 0, i=0, j=0;
//     let arr = new Array(n);
//     for(i=0,j=0;i<n;i++){
//         if(nums[i]===0){
//             c++;
//         } else{
//             arr[j] = nums[i];
//             j++;
//         }
//     }

//     while(c-->0){
//         arr[j++] = 0
//     }
//     console.log(arr);
// };

var moveZeroes = function(nums) {
    let n = nums.length;
    for(let j=0,i=j+1;i<n;i++){
        if(nums[j]===0 && nums[i]!==0){
            nums[j] = nums[i];
            nums[i] = 0;
            j++;
        } else {
            j++;
        }
    }

    console.log(nums);
};

moveZeroes([0,1,0,3,12]);