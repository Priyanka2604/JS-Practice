var findLHS = function(nums) {
    const mp = {};
    for(const num of nums){
        mp[num] = (mp[num] || 0) + 1;
    }

    let maxLen = 0;
    for(let [num, freq] of Object.entries(mp)){
        if(mp[num + 1] !== undefined){
            maxLen = Math.max(maxLen, freq + mp[num+1]);
        }
    }

    return maxLen;
};

console.log(findLHS([1,3,2,2,5,4,3,3])); // Output: 5
