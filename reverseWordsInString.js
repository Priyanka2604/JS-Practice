/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a = s.split(" ");
    let ans = "";
    let n= a.length-1;
    while(n>=0){
        if(a[n]!==""){
            ans += a[n]+" ";
        }
        n--;
    }

    return ans.trim();
};

console.log(reverseWords("a good   example"));