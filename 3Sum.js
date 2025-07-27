// var threeSum = function(nums) {
//     let n = nums.length;
//     let ans = [];
//     for (let i = 0; i < n; i++) {
//         let hashset = new Set();
//         for (let j = i + 1; j < n; j++) {
//             //Calculate the 3rd element:
//             let third = -(nums[i] + nums[j]);

//             //Find the element in the set:
//             if (hashset.has(third)) {
//                 let temp = [nums[i], nums[j], third];
//                 temp.sort((a, b) => a - b);
//                 ans.push(temp);
//             }
//             hashset.add(nums[j]);
//         }
//     }

//     //store the set in the answer:
//     let set  = new Set(ans.map(JSON.stringify));
//     ans = Array.from(set).map(JSON.parse);
//     return ans;
// };

// var threeSum = function(nums) {
//     let ans = [];
//     for(let i=0;i<nums.length;i++){
//         let hs = new Set();
//         for(let j=i+1;j<nums.length;j++){
//             let rem = -(nums[i]+nums[j]);
//             if(hs.has(rem)){
//                 let temp = [nums[i], nums[j], rem];
//                 temp.sort((a,b) => a-b);
//                 ans.push(temp);
//             }

//             hs.add(nums[j]);
//         }

//         let ansSet = new Set(ans.map(JSON.stringify));
//         ans = Array.from(ansSet).map(JSON.parse);
//         return ans;
//     }
// };

var threeSum = function(nums) {
    let ans = [];
    let n = nums.length;
    nums.sort((a,b) => a-b);
    for(let i=0;i<n;i++){
        if(i!==0 && nums[i]===nums[i-1]) continue;
        let j=i+1,k=n-1;
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k];
            if(sum > 0){
                k--;
            }else if(sum < 0){
                j++;
            } else {
                ans.push([nums[i],nums[j],nums[k]]);
                j++, k--;
                while(j<k && nums[j]===nums[j-1]){
                    j++;
                }
                while(j<k && nums[k]===nums[k+1]){
                    k--;
                }
            }
       }
    }

    return ans;
}

console.log(threeSum([2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]));
//console.log(threeSum([-1,0,1,2,-1,-4]));