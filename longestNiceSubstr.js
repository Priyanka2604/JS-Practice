// Sliding window with Recursion 
/**
 * @param {string} s
 * @return {string}
 */
// var longestNiceSubstring = function(s) {
//     if(s.length < 2) return "";

//     const obj = {};

//     for(const i of s) obj[i] = i;

//     for(let i = 0; i < s.length; i++){
//         const item = s[i];

//         if(obj[item.toUpperCase()] && obj[item.toLowerCase()]) continue;

//         const left = longestNiceSubstring(s.substring(0, i));
//         const right = longestNiceSubstring(s.substring(i + 1));

//         return left.length >= right.length ? left : right;

//     }

//     return s;
// };

var longestNiceSubstring = function(s) {
    if (s.length < 2) return "";
    let strSet = new Set(s);
    for(let i = 0; i < s.length; i++){
        if(strSet.has(s[i].toLowerCase()) && strSet.has(s[i].toUpperCase())){
            continue;
        }
        const left = longestNiceSubstring(s.slice(0,i));
        const right = longestNiceSubstring(s.slice(i + 1));
        return left.length >= right.length ? left : right;
    }
    return s;
};

console.log(longestNiceSubstring("YazaAay")); // Output: "aAa"
