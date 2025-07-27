var longestSubarray = function (arr, k) {
  // code here
  // with +ve and -ve
/* let maxLen = 0,
    sum = 0;
  let mp = new Map();
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    let rem = sum - k;
    if (mp.has(rem)) {
      maxLen = Math.max(maxLen, i - mp.get(rem));
    }

    if (!mp.has(sum)) {
      mp.set(sum, i);
    }
  }
*/

//with only +ve and zeroes(optimal solution)
let maxLen = 0, sum = arr[0], i=0, j=0;
    while(i<arr.length){
        while(j<=i && sum>k){
            sum -= arr[j];
            j++;
        }
        
        if(sum===k){
            maxLen = Math.max(maxLen, i+1-j);
        }
        i++;
        if(i<arr.length) sum += arr[i];
    }

  return maxLen;
};

console.log(longestSubarray([5,2, 3, 3, 7, 2, 10], 15));
