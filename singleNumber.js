var singleNumber = function (nums) {
  let mp = {};
  for (let i = 0; i < nums.length; i++) {
    if (mp[nums[i]]) {
      mp[nums[i]]++;
    } else {
      mp[nums[i]] = 1;
    }
  }

  for (const [key, val] of Object.entries(mp)) {
    if (val === 1) {
      return parseInt(key);
    }
  }

  return -1;
};

console.log(singleNumber([2, 2, 1]));
